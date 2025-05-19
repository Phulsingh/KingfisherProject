import React from "react";
import MyContaxt from "./MyContaxt";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../API/Api.js";

const ContaxtProvider = ({ children }) => {
  //Fetch the user;
  const [users, setUsers] = useState([]);

  //Store all the products;
  const [products, setProducts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/products");
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
        toast.error("Item does not found");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchText, products]);
  

  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      setCart(currentUser.cart || []);
    }
  }, [currentUser]);

  //console.log(currentUser);
  const [cart, setCart] = useState(() => currentUser?.cart || []);

  useEffect(() => {
    const user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : undefined;
    if (user && user?.cart) {
      setCart(user.cart);
    }
  }, [setCart]);

  const lengthOfCart = currentUser?.cart?.length || 0;
  //console.log(lengthOfCart)

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    if (userData) {
      setUsers(userData);
    }
  }, [setUsers]);



  const addToCart = async (item) => {
    if (!currentUser) {
      toast("Please login to add to cart");
      return
    }

    const existingCart = currentUser.cart || [];
    console.log(existingCart)
    const itemExists = existingCart.find((cartItem) => cartItem._id === item._id);

    if (itemExists) {
      toast("Item already in cart. Use '+' to increase quantity.");
      return;
    }

    const newItem = { ...item, quantity: 1, totalPrice: item.price };
    const updatedCart = [...existingCart, newItem];
    const updatedCurrentUser = { ...currentUser, cart: updatedCart };

    try {
      const token  = localStorage.getItem('token') || ''
      // 🔥 send only the new item (not full cart array)
      await API.post(`/cart`, newItem , {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setCurrentUser(updatedCurrentUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

      const updatedUsers = users.map((u) =>
        u.email === currentUser.email ? updatedCurrentUser : u
      );
      setUsers(updatedUsers);
      toast.success(`item added to cart`)
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item");
    }
  };





  const increaseQuantity = (itemId) => {
    console.log(itemId)
    const updatedCart = currentUser.cart.map((cartItem) => {
      if (cartItem._id === itemId) {
        const newQty = cartItem.quantity + 1;
        return {
          ...cartItem,
          quantity: newQty,
          totalPrice: newQty * cartItem.price,
        };
      }
      return cartItem;
    });

    const updatedCurrentUser = { ...currentUser, cart: updatedCart };
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    const updatedUsers = users.map((u) =>
      u.email === currentUser.email ? updatedCurrentUser : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = currentUser.cart
      .map((cartItem) => {
        if (cartItem.id === itemId) {
          const newQty = cartItem.quantity - 1;
          if (newQty <= 0) return null; // Will filter this out later
          return {
            ...cartItem,
            quantity: newQty,
            totalPrice: newQty * cartItem.price,
          };
        }
        return cartItem;
      })
      .filter((item) => item !== null); // Remove items with quantity 0

    const updatedCurrentUser = { ...currentUser, cart: updatedCart };
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    const updatedUsers = users.map((u) =>
      u.email === currentUser.email ? updatedCurrentUser : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <MyContaxt.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        addToCart,
        cart,
        setCart,
        lengthOfCart,
        increaseQuantity,
        decreaseQuantity,
        products,
        searchText,
        setSearchText,
        filteredProducts,
      }}
    >
      {children}
    </MyContaxt.Provider>
  );
};

export default ContaxtProvider;
