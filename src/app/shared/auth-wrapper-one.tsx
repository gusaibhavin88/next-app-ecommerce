import React from "react";

const AuthWrapperOne = ({
  children,
  title,
  bannerTitle,
  bannerDescription,
  description,
  pageImage,
}: {
  children: React.ReactNode;
  title?: String;
  bannerTitle?: String;
  bannerDescription?: String;
  description?: String;
  pageImage?: String;
}) => {
  return (
    <div className="flex   h-screen   border-2  items-center   text-center   justify-center">
      <div className="flex-col   gap-2 mr-4">
        <h3 className="font-bold   mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default AuthWrapperOne;
