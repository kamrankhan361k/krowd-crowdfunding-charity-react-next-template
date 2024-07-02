import React from "react";
import ModalVideo from "react-modal-video";

/**
 * @param {{isOpen: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; videoId: string; autoplay?: boolean;channel?:string;ratio?:string;onClose?:() => void;}} props
 */

const VideoModal = ({
  isOpen = false,
  setOpen,
  videoId = "",
  autoplay = true,
  channel = "youtube",
  ratio = "16:9",
  onClose,
  ...props
}) => {
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel={channel}
          autoplay={autoplay}
          ratio={ratio}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => {
            setOpen(false);
            onClose?.();
          }}
          {...props}
        />
      )}
    </>
  );
};

export default VideoModal;
