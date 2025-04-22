import { useState, useEffect } from "react";

function Lamp() {
  const [clock, setClock] = useState(new Date());
  const [power, setPower] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const time = new Date(clock).toLocaleTimeString('en-US', {hour12:true});
  const hours = [...clock.getHours().toLocaleString()];
  const minutes = [...clock.getMinutes().toLocaleString()];
  const day = [...clock.getDate().toLocaleString()];
  const month = [...(clock.getMonth() + 1).toLocaleString()];
  const year = [...clock.getFullYear().toString()];
  const seconds = [...clock.getSeconds().toString()];

  const DoubleDigit = ({ value, type }) => (
    <>
      {type === "year" ? (
        <>
          <div>{value[2]}</div>
          <div>{value[3]}</div>{" "}
        </>
      ) : (
        <>
          <div>{value.length === 1 ? "\u00A0" : value[0]}</div>
          <div>{value.length === 1 ? value[0] : value[1]}</div>
        </>
      )}
    </>
  );

  return (
    <div className="lamp-wrap" title="Retro Lamp">
    <div className={`main-wrap ${power && "off"}`}>
      <div className="bg">
        <div className="bg__shadow"></div>
      </div>
      <div className="base">
        <div className="base__clamps">
          <span></span>
          <span></span>
        </div>
        <div className="base__circle"></div>
        <div className="base__box"></div>
        <div className="base-center">
          <div className="base-center__main"></div>
          <div className="base-center__fork-set">
            <div className="base-center__top"></div>
            <div className="base-center__legs">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="base-center__bottom"></div>
            <button
              className="switch"
              onClick={() => setPower((prev) => !prev)}
            ></button>
          </div>
        </div>
      </div>
      <div className="big-glow"></div>
      <div className="left-bracket">
        <div className="bracket bracket__l1">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>
        <div className="bracket bracket__l2">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>

        <div className="bracket bracket__l3">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>
      </div>

      <div className="right-bracket">
        <div className="bracket bracket__l1">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>
        <div className="bracket bracket__l2">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>

        <div className="bracket bracket__l3">
          <div className="bracket__clamp"></div>
          <div className="bracket__arm"></div>
          <div className="bracket__knob"></div>
        </div>
      </div>
      <div className="top-control">
        <div className="top-control__v-pipe"></div>
        <div className="top-control__h-pipe"></div>
        <div className="top-control__switch"></div>
      </div>
      <div className="main-frame">
        <div className="main-frame__inner">
          <div className="small-frame">
            <div className="small-frame__inner"></div>
            <div className="small-frame__inner-line"></div>
            <div className="small-frame__center-line"></div>
            <div className="small-frame__outer-line"></div>
          </div>
          <div className="capsule-frame"></div>

          <div className="time">
            <DoubleDigit value={hours} />
            <DoubleDigit value={minutes} />
            <DoubleDigit value={day} />
            <DoubleDigit value={month} />
            <DoubleDigit value={year} type="year" />

            <div className="time__half">
              {seconds.length === 1 ? (
                <span>&nbsp;</span>
              ) : (
                <span>{seconds[0]}</span>
              )}
              {seconds.length === 1 ? (
                <span>{seconds[0]}</span>
              ) : (
                <span>{seconds[1]}</span>
              )}
            </div>
          </div>
          <div className="time placeholder">
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div className="time__half">
              <span>8</span>
              <span>8</span>
            </div>
          </div>
        </div>
        <div className="main-frame__outer-line"></div>
        <div className="main-frame__inner-line"></div>
        <div className="main-frame__center-line"></div>
      </div>
    </div>
    </div>
  );
}

export default Lamp;
