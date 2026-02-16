import React, { useState, useEffect } from "react";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  const gallery = data?.gallery || data?.siblings || (data ? [data] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const isProjectImage = data?.isProjectImage;

  useEffect(() => {
    const foundIndex = gallery.findIndex((img) => img.id === data?.id);
    if (foundIndex !== -1) setCurrentIndex(foundIndex);
    setImageError(false); // Reset error when data changes
  }, [data, gallery]);

  useEffect(() => {
    const imgfileWindow = document.getElementById("imgfile");
    if (imgfileWindow) {
      // Clear all sizing classes first
      imgfileWindow.classList.remove(
        "imgfile-large",
        "imgfile-small",
        "imgfile-mobile",
      );

      // Apply appropriate class based on image type
      if (data?.isMobileFormat) {
        imgfileWindow.classList.add("imgfile-mobile");
      } else if (isProjectImage) {
        imgfileWindow.classList.add("imgfile-large");
      } else {
        imgfileWindow.classList.add("imgfile-small");
      }
    }
  }, [isProjectImage, data?.isMobileFormat]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  if (!gallery.length) return null;

  // Add the ? after the bracket
const currentImg = gallery[currentIndex];
const currentImgUrl = currentImg?.url || currentImg?.imageUrl || "";

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <div id="window-header">
        <WindowControlls target="imgfile" />
        <h2 className="text-sm font-bold">{gallery[currentIndex]?.name}</h2>
      </div>

      {/* Main Container: Flex row to put buttons SIDES of the image */}
      <div className="flex-1 flex items-center justify-between bg-gray-50/50 relative overflow-hidden">
        {/* Left Button - Dedicated Area */}
        <div className="w-16 h-full flex items-center justify-center z-10">
          {gallery.length > 1 && (
            <button
              onClick={prevSlide}
              className="p-3 rounded-full transition-colors text-xl text-gray-400 hover:text-gray-800"
            >
              ←
            </button>
          )}
        </div>

        {/* Image Area - Maximum Size */}
        <div className="flex-1 h-full flex items-center justify-center p-2">
          {imageError ? (
            <div className="text-gray-400 text-center">
              <p>Image failed to load</p>
              <p className="text-xs mt-1">{currentImgUrl}</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImgUrl}
                alt={gallery[currentIndex].name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                onError={() => setImageError(true)}
              />
            </AnimatePresence>
          )}
        </div>

        {/* Right Button - Dedicated Area */}
        <div className="w-16 h-full flex items-center justify-center z-10">
          {gallery.length > 1 && (
            <button
              onClick={nextSlide}
              className="p-3 rounded-full transition-colors text-xl text-gray-400 hover:text-blue-500"
            >
              →
            </button>
          )}
        </div>
      </div>

      {/* Bottom Bar: Dedicated area for dots so they don't overlap the image */}
      <div className="h-12 border-t border-gray-100 flex items-center justify-center bg-white">
        <div className="flex gap-3">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all rounded-full ${i === currentIndex ? "bg-blue-500 w-6" : "bg-gray-300 w-1.5 hover:bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
