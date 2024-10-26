import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import { Fragment, useContext } from "react";
const ImageGallery = () => {
  const { gallery, setGallery } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={[
          "images/clients/client_1.png",
          "images/clients/client_2.png",
          "images/clients/client_3.png",
        ]}
      />
    </Fragment>
  );
};
export default ImageGallery;
