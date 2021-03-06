import React from "react";
import { Container, Button } from "@material-ui/core";

export default function GameOver(props) {
    return (
        <Container>
            <h1 style={{ margin: "20px" }}>Game Over!</h1>
            <h3>The winner is </h3>
            <h2>{props.winner.name}</h2>
            <h3>with the score of </h3>
            <h2>{props.winner.score}</h2>
            <br />

            <div style={{ margin: "20px" }}>
                <Button href="/settings" color="secondary" variant="outlined">
                    New Game
                </Button>
            </div>
        </Container>
    );
}
