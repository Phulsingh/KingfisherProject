import React from 'react'
import { useEffect, useState } from 'react';

const BannerChanger = () => {

    const images = [
      "https://media-hosting.imagekit.io/532cd94b4c994bd4/3rd%20image.png?Expires=1839143189&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VKdcS-bt9X2vGSvO-aU9PVPNXYlvAXa7lUP8GNAORLcq9bdUcVh~pLX5rmT7bBMKzOib7uS-VTN-ZjTxu6ROIG2iaW61Fxr-UjQ4tI930C7x~wwnE16dup5CpczTukksxT62-gYZGGm09DX5lerM3vBf8eLak4PzqFh0n0OHYIk25ZbKdtukf6pMiqq0lm1MUERKuNuZYYwb-LKvdUVBWc4TBgHVPIAPkaNjY5nJrYWXnWkeWlmWH7BGi4HOW0MngzO3HLrPQ0~fnz3N11acde6lGgf63wZiUBLqY-xF-SBs40lrMIemXjVp5wWG689nPq4sNB2wTrcOHdlpq~jOZA__",
      "https://media-hosting.imagekit.io/2273ad0d755a4df9/2n%20image.png?Expires=1839143189&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r90zO33AKjuWhkSRAA-EUwk17xz1LasH9RW7tPzNGvB-9nev01DoexT2XV0oggR-NsNuxPuKD99eZNHue17uXKdtVVaVXVgR-jqyuhFbyHOU0q3k7g1C-VrCa~a7K023G04i6G6jACEQTyoRn0auorUaz26oJdPNlTr61C7l4yqW26~SIuuDbgUpMKdGB82LrqdXjBD36zCuGxug18u5Wceug2b56h8K3ds8~ML9YvAAN8cOirKmx2FdywroM8lDO9P~H72P4kYG~odYcVRVJKBXi5~12EgltXl3nLq0IBWppJ3SsmiRxJhz8MFsZYXJNL27noCz6rcMiaSoZIfIyg__",
      "https://media-hosting.imagekit.io/e467553596034c8c/1st%20image.png?Expires=1839143189&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U2liLrxAryTym-iIhklhQYizYkWsLGIwrBdIWbAtubq-E2XeyXjwUhfxuf1XgsNhMhMam2LmPmTHoM~KSqhVCUhnV29YJyyfRqAOobBfiMCOCo3qvxaUp9xh234t2T5A5hLL0MasICfXx3kWNejfNJ0U3vsxOqPxJaO9tMVvxRtrHT4PMsWBd0IKW3nGp5s8PcEw5Zv3b4pDHd6OV6YibJsOcDMdObBAeQLUqgihpoDvn1fnZBVoxKa1CnCZI-W8iqVsZq7VQSnu-7-Ir99s2N3cpRsDn-5bh5QizKhx9FUMucA4dv4a1z792an-HEDMuE6gMxVEmcHyR9W6wjaf7w__"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-full flex justify-center mt-3 md:mt-0 ">
    <img
      src={images[currentIndex]}
      alt="slider"
      className="md:w-full cursor-pointer rounded-xl md:rounded-none w-[94%] h-[120px] md:h-[400px] md:object-cover"
    />
  </div>
  )
}

export default BannerChanger
