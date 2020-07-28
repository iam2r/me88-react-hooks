import React, { FC } from "react";
import Slider from "root/component/Slider";
export interface BannerProps {
  items?: any[];
}
const Banner: FC<BannerProps> = (props: BannerProps) => {
  const getItems = () => {
    return (
      props.items ?? [
        {
          content: (
            <div>
              <img
                data-screen="web"
                src={
                  require("root/assets/images/homepage/home-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                data-screen="pad"
                src={
                  require("root/assets/images/homepage/pad/home-banner1.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
          tab: (
            <div>
              <img
                src={
                  require("root/assets/images/homepage/small-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                src={
                  require("root/assets/images/homepage/small-banner1-on.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
        },
        {
          content: (
            <div>
              <img
                data-screen="web"
                src={
                  require("root/assets/images/homepage/home-banner2.png")
                    .default
                }
                alt=""
              />
              <img
                data-screen="pad"
                src={
                  require("root/assets/images/homepage/pad/home-banner2.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
          tab: (
            <div>
              <img
                src={
                  require("root/assets/images/homepage/small-banner2.png")
                    .default
                }
                alt=""
              />
              <img
                src={
                  require("root/assets/images/homepage/small-banner2-on.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
        },
        {
          content: (
            <div>
              <img
                data-screen="web"
                src={
                  require("root/assets/images/homepage/home-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                data-screen="pad"
                src={
                  require("root/assets/images/homepage/pad/home-banner1.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
          tab: (
            <div>
              <img
                src={
                  require("root/assets/images/homepage/small-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                src={
                  require("root/assets/images/homepage/small-banner1-on.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
        },
        {
          content: (
            <div>
              <img
                data-screen="web"
                src={
                  require("root/assets/images/homepage/home-banner2.png")
                    .default
                }
                alt=""
              />
              <img
                data-screen="pad"
                src={
                  require("root/assets/images/homepage/pad/home-banner2.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
          tab: (
            <div>
              <img
                src={
                  require("root/assets/images/homepage/small-banner2.png")
                    .default
                }
                alt=""
              />
              <img
                src={
                  require("root/assets/images/homepage/small-banner2-on.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
        },
        {
          content: (
            <div>
              <img
                data-screen="web"
                src={
                  require("root/assets/images/homepage/home-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                data-screen="pad"
                src={
                  require("root/assets/images/homepage/pad/home-banner1.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
          tab: (
            <div>
              <img
                src={
                  require("root/assets/images/homepage/small-banner1.png")
                    .default
                }
                alt=""
              />
              <img
                src={
                  require("root/assets/images/homepage/small-banner1-on.png")
                    .default
                }
                alt=""
              />
            </div>
          ),
        },
      ]
    );
  };

  return (
    <div className="banner">
      <Slider items={getItems()} />
    </div>
  );
};

export default Banner;
