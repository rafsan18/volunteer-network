import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "200px",
        width: "350px",
        marginBottom: "20px",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 151,
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
        paddingBottom: theme.spacing(1),
    },
}));

const ChosenEvent = (props) => {
    const classes = useStyles();
    const { title, selectedDate, img, _id } = props.ev;

    const cancelEvent = (id) => {
        fetch(`http://localhost:5000/cancelEvent/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("deleted Successfully");
            });

        console.log(id);
    };
    return (
        <div className="col-md-4">
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={img}
                    title={title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {new Date(selectedDate).toDateString("dd/MM/yyyy")}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Button
                            onClick={() => cancelEvent(_id)}
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ChosenEvent;
