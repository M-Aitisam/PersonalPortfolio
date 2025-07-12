import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import Image from "next/image"; // Using Next.js optimized Image component

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <div className="p-2">
          <Row>
            <Col className="order-lg-2" lg="4">
              <div className="position-relative" style={{ width: 200, height: 200 }}>
                <Image
                  src={avatar_url}
                  alt="GitHub profile"
                  className="rounded-circle img-fluid shadow shadow-lg--hover mb-4"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
              </p>
              {bio && <p className="text-white mt-3">{bio}</p>}
              {location && (
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                  <i className="ni ni-pin-3 text-info me-2" />
                  {location}
                </div>
              )}
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;