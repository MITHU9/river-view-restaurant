import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const FoodDetailModal = ({ isOpen, onClose, food }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [lensPos, setLensPos] = useState(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef();

  const lensSize = 250;
  const zoom = 2;

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      setLensPos({ x, y });
    } else {
      setLensPos(null);
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImgDimensions({ width, height });
    }
  }, [food?.image_url]);

  if (!food) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        {/* Modal Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-4xl rounded-2xl bg-[#2D0900] p-6 shadow-xl relative border border-gray-700">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <Dialog.Title className="text-2xl font-bold text-gray-200 mb-4">
                {food.name}
              </Dialog.Title>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Zoomable Image */}
                <div
                  className="relative group w-full md:w-1/2 overflow-hidden rounded-xl"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setLensPos(null)}
                  ref={imgRef}
                >
                  <img
                    src={food.image_url}
                    alt={food.name}
                    className="w-full h-full object-cover cursor-zoom-in transition"
                    onClick={() => setShowFullImage(true)}
                  />
                  {lensPos && (
                    <div
                      className="absolute pointer-events-none border-2 border-amber-500 rounded-md shadow-xl"
                      style={{
                        width: lensSize,
                        height: lensSize,
                        top: lensPos.y - lensSize / 2,
                        left: lensPos.x - lensSize / 2,
                        backgroundImage: `url(${food.image_url})`,
                        backgroundSize: `${imgDimensions.width * zoom}px ${
                          imgDimensions.height * zoom
                        }px`,
                        backgroundPosition: `-${
                          lensPos.x * zoom - lensSize / 2
                        }px -${lensPos.y * zoom - lensSize / 2}px`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#000",
                      }}
                    />
                  )}
                </div>

                {/* Food Details */}
                <div className="flex-1">
                  <p className="text-sm text-gray-200 mb-2">
                    <strong>Category:</strong> {food.category.toUpperCase()}
                  </p>
                  <p className="text-gray-400">{food.description}</p>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-200">Ingredients:</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm mt-1">
                      {food.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.replace(/["[\]]/g, "")}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-600">
                      ৳{food.price}
                    </span>
                    {!food.is_vegetarian && (
                      <span className="text-xs px-3 py-1 bg-red-100 text-red-600 rounded-full">
                        Non-Vegetarian
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>

        {/* Fullscreen Image View */}
        {showFullImage && (
          <div
            className="fixed inset-0 z-[60] bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
            onClick={() => setShowFullImage(false)}
          >
            <img
              src={food.image_url}
              alt="Full view"
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white"
            />
            <button
              className="absolute top-6 right-6 text-white text-2xl font-bold"
              onClick={() => setShowFullImage(false)}
            >
              &times;
            </button>
          </div>
        )}
      </Dialog>
    </Transition>
  );
};

export default FoodDetailModal;
