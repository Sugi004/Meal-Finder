import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Card as BootStrapCard } from "react-bootstrap";

function BootStrapCards({ name, image, video }) {
  let navigate = useNavigate();
  return (
    <>
      <BootStrapCard
        style={{ width: "15rem", padding: "10px", textAlign: "center" }}
      >
        <BootStrapCard.Img variant="top" src={image} />
        <BootStrapCard.Body>
          <BootStrapCard.Title>{name}</BootStrapCard.Title>
          {/* <BootStrapCard.Text>
              Some quick example text to build on the BootStrapCard title and make up the
              bulk of the BootStrapCard's content.
            </BootStrapCard.Text> */}
          <Button
            variant="primary"
            onClick={() => {
              window.open(video, "_blank");
            }}
          >
            Watch Video
          </Button>
        </BootStrapCard.Body>
      </BootStrapCard>
    </>
  );
}

export default BootStrapCards;
