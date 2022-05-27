import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressbarComp = (props) => {
    const percentage = props.value;
    return (
        <div style={{ width: 100, height: 100, margin: 10 }}>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                styles={buildStyles({
                    textColor: "#333",
                    pathColor: "turquoise",
                    trailColor: "#9e9e9e6e"
                  })}
                strokeWidth={5}
                />{props.technology}
        </div>
    )
}

export default CircularProgressbarComp