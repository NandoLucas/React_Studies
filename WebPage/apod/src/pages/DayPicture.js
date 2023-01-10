import React, { useState, useEffect } from "react";
import Navbar from "../components/Top/navbar2";
import Footer from "../components/Bottom/footer2";
import "../css/style.css";
export default function DayPicture() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=8XihVDT5XpGZVq8m2OYYgrCGUFK8fVwIvVrW0W37";
  const [photoData, setPhotoData] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPhotoData(data);
    };
    fetchData();
  }, []);
  if (!photoData) return <div />;
  return (
    <>
      <Navbar></Navbar>
      <main>
        <h2>Título: {photoData.title}</h2>
        <h3>Data: {photoData.date}</h3>
        <section>
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title}></img>
          ) : (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe src={photoData.url}></iframe>
          )}
          <p>Explanation: {photoData.explanation}</p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
