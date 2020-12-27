import classes from "./home.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaCss3Alt, FaNode } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiMongodb, SiMysql } from "react-icons/si";
const Home = () => {
  const size = 48;
  const IconColor = "#4fc1e9";
  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <span className={classes.heading}>About me</span>
        <div className={classes.detailContainer}>
          <span className={classes.subHeading}>
            Things I love to talk about
          </span>
          <ul>
            <li>
              <span className={classes.bottomColor}>React native</span> and
              cross platform development
            </li>
            <li>
              Ideas from conference and podcast talks,personal favourites ::{" "}
              <span className={classes.bottomColor}>Callstack Engineers</span>{" "}
              and <span className={classes.bottomColor}>geekyAnts meetups</span>
            </li>
            <li>
              Architecure of{" "}
              <span className={classes.bottomColor}>frameworks</span>{" "}
            </li>
            <li>Desserts</li>
          </ul>
        </div>

        <div className={classes.detailContainer}>
          <span className={classes.subHeading}>Ideologies I live by</span>
          <ul>
            <li>
              Consuming good content won't bring any change, until you{" "}
              <span className={classes.bottomColor}>take action</span>
            </li>

            <li>
              You won't grow big, until you{" "}
              <span className={classes.bottomColor}>help others</span>
            </li>

            <li>
              Don't marry any{" "}
              <span className={classes.bottomColor}>framework</span>
            </li>

            <li>
              <span className={classes.bottomColor}>Better UX</span>
              {" >>> "}flashy UI
            </li>

            <li>
              The only constraint is you, Be ready to{" "}
              <span className={classes.bottomColor}>Adapt new things</span>
            </li>

            <li>
              Don't let your mind to settle,It will{" "}
              <span className={classes.bottomColor}>kill your growth</span>{" "}
            </li>
          </ul>
        </div>

        <div className={classes.cardContainer}>
          <span className={classes.heading}>
            Language and framework am good with
          </span>
          <div className={classes.iconContainer}>
            <AiFillHtml5 className={classes.icon} size={size} />
            <SiJavascript className={classes.icon} size={size} />
            <FaCss3Alt className={classes.icon} size={size} />
            <FaReact className={classes.icon} size={size} />
            <SiFlutter className={classes.icon} size={size} />
            <FaNode className={classes.icon} size={size} />
            <SiMysql className={classes.icon} size={size} />
            <SiMongodb className={classes.icon} size={size} />
          </div>
        </div>

        <div className={classes.cardContainer}>
          <span className={classes.heading}>What's next for me ? </span>
          <div className={classes.detailContainer}>
            {/* <span className={classes.subHeading}>Here they are</span> */}
            <ul>
              <li>
                Learn more about{" "}
                <span className={classes.bottomColor}>web and pwa</span>
              </li>
              <li>
                Animations in react-native with{" "}
                <span className={classes.bottomColor}>reanimated 2</span>
              </li>

              <li>
                Aws <span className={classes.bottomColor}>Amplify</span>
              </li>

              <li>
                More on backend by exploring{" "}
                <span className={classes.bottomColor}>webRTC and GraphQl</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
