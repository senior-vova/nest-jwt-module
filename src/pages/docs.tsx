import React from "react";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import { MainWrapper } from "../components/MainWrapper";
import { MenuItem } from "../components/MenuItem";
import { TabPane } from "../components/TabPane";

const DocsPage: React.FC = () => {
  return (
    <MainWrapper>
      <Tab.Container id="docs-menu" defaultActiveKey="#docs/install">
        <Row>
          <Col sm={3}>
            <ListGroup variant="flush">
              <MenuItem tabName="install" name="Install" />
              <MenuItem tabName="get-started" name="Get started" />
              <MenuItem tabName="auth-module" name="Auth Module" />
              <MenuItem tabName="auth-service" name="Auth Service" />
              <MenuItem tabName="jwt-module" name="JWT Module" />
              <MenuItem tabName="jwt-service" name="JWT Service" />
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <TabPane tabName="install">
                <h3>Install</h3>
              </TabPane>
              <TabPane tabName="get-started">
                <h3>Get Starting</h3>
              </TabPane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </MainWrapper>
  );
};

export default DocsPage;
