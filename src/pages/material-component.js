import React from "react"
import { Hidden } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

class OutlinedCard extends React.Component {
  getCustomData = () => {
    const classes = {}
    try {
      return (
        <>
          {this.props.data.map(datum => (
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  {datum.node.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </>
      )
    } catch (exception) {
      console.log(`except - `, exception)
      return <h1>Error here</h1>
    }
  }
  render() {
    // const bull = <span className={classes.bullet}>•</span>
    console.log(`data 123 - `, this.props.data)
    return (
      <>
        <Hidden mdDown>This is md Down</Hidden>
        <Hidden mdUp>This is md Up</Hidden>
        <h1>here</h1>
        {this.getCustomData()}
      </>
    )
  }
}

export default OutlinedCard
