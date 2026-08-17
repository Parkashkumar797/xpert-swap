import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VideoCall = () => {
  const { id } = useParams();

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1879903461;
    const serverSecret = "7686a6fb7de9095736ee2c543a0e1864";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "shivam"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url: `https://xpertswap.com/call/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showRoomTimer: true,
      showLayoutButton: true,
      showAudioVideoSettingsButton: true,
      showRoomDetailsButton: true,
    });
  };

  return (
    <>
      <Header />
      <div
        ref={myMeeting}
        className="w-screen h-screen bg-gradient-to-t from-white to-blue-700 flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <p className="text-lg text-white z-10 animate-pulse">
          Loading video call...
        </p>
      </div>
      <Footer />
    </>
  );
};

export default VideoCall;
