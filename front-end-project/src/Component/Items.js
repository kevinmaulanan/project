import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Container
} from 'reactstrap'
import Pizza from '../Asset/pizza.png'


class ItemsCostume extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src={Pizza} height="200" width="50" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>50.000</CardTitle>
                                <CardSubtitle>Pizza</CardSubtitle>
                                <CardText>Pizza yang Sangat Beautiful</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src={Pizza} height="200" width="50" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src={Pizza} height="200" width="50" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default ItemsCostume
