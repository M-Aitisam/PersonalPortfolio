import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { motion } from "framer-motion";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  return (
    <Col lg="6">
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.99 }}
      >
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                <div className="d-flex gap-2">
                  {github && (
                    <Button
                      className="btn-icon"
                      color="github"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  )}
                  {link && (
                    <Button
                      className="btn-icon"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;