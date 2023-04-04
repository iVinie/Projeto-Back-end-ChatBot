import React from 'react';
import roboJpg from '../../assets/img/robô.jpg';
import roboGif from '../../assets/img/robô.gif';
function RobotImage({imgRb, TocouNoRobo}) {
  return (
    <img src={imgRb === 'roboJpg' ? roboJpg : roboGif} alt="Robô" onClick={TocouNoRobo} />
  );
}
export default RobotImage;
// ESTA BUGADO POR ISSO NAO IMPORTEI... o ROBO SIMPLESMENTE NAO RESPONDE
