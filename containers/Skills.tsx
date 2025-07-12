import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Skills = () => {
  return (
    skillsSection && (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInAnimation}
      >
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      const skillId = skill.skillName.replace(/\s/g, "");
                      return (
                        <React.Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skillId}
                          >
                            <Icon 
                              icon={skill.iconifyTag} 
                              width="24" 
                              height="24" 
                              style={{ verticalAlign: 'middle' }}
                            />
                          </div>
                          <UncontrolledTooltip 
                            delay={0} 
                            placement="bottom" 
                            target={skillId}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => (
                      <p key={i}>{skill}</p>
                    ))}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </motion.div>
    )
  );
};

export default Skills;