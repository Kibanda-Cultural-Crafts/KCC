import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon2 } from './Arrow3Icon2.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { ArrowIcon2 } from './ArrowIcon2.js';
import { ArrowIcon } from './ArrowIcon.js';
import { Button_ButtonTypePrimaryButton2 } from './Button_ButtonTypePrimaryButton2/Button_ButtonTypePrimaryButton2.js';
import { Button_ButtonTypePrimaryButton } from './Button_ButtonTypePrimaryButton/Button_ButtonTypePrimaryButton.js';
import { ChevronLeft } from './ChevronLeft/ChevronLeft.js';
import { ChevronleftIcon } from './ChevronleftIcon.js';
import { ChevronrightIcon } from './ChevronrightIcon.js';
import { Component1_ButtonTypePrimaryBu } from './Component1_ButtonTypePrimaryBu/Component1_ButtonTypePrimaryBu.js';
import { Frame127Icon } from './Frame127Icon.js';
import { Group10Icon } from './Group10Icon.js';
import { Group11Icon } from './Group11Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './HomePage.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import { Rectangle757Icon } from './Rectangle757Icon.js';
import { Search } from './Search/Search.js';
import { SearchIcon } from './SearchIcon.js';
import { ShoppingCart } from './ShoppingCart/ShoppingCart.js';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';
import { UnsplashBbiusdck8tuIcon } from './UnsplashBbiusdck8tuIcon.js';
import { User } from './User/User.js';
import { UserIcon } from './UserIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    shoppingCart?: boolean;
    arrowRight?: boolean;
    shoppingCart2?: boolean;
    arrowRight2?: boolean;
    icon?: boolean;
    shoppingCart3?: boolean;
    arrowRight3?: boolean;
    arrowRight4?: boolean;
  };
}
/* @figmaId 85:1544 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle757}>
        <Rectangle757Icon className={classes.icon4} />
      </div>
      <div className={classes.needHelpSection}>
        <div className={classes.rectangle36}></div>
        <div className={classes.frame127}>
          <div className={classes.frame126}>
            <div className={classes.vector}>
              <VectorIcon className={classes.icon5} />
            </div>
            <div className={classes.frame125}>
              <div className={classes.availableOnThe}>Available on the</div>
              <div className={classes.appStore}>App Store</div>
            </div>
            <div className={classes.group}>
              <GroupIcon className={classes.icon6} />
            </div>
            <div className={classes.vector2}>
              <VectorIcon2 className={classes.icon7} />
            </div>
            <div className={classes.frame124}>
              <div className={classes.androidAppOn}>android app on</div>
              <div className={classes.googlePlay}>Google Play</div>
            </div>
            <div className={classes.group2}>
              <GroupIcon2 className={classes.icon8} />
            </div>
          </div>
          <div className={classes.icon9}>
            <Frame127Icon className={classes.icon10} />
          </div>
          <div className={classes.frame123}>
            <div className={classes.frame122}>
              <div className={classes.location}>Location</div>
              <div className={classes.frame118}>
                <div className={classes.supportKibandaCoKe}>support@kibanda.co.ke</div>
                <div className={classes.kibandaCulturalCrafts}>Kibanda Cultural Crafts</div>
              </div>
            </div>
            <div className={classes.frame121}>
              <div className={classes.moreInfo}>More Info</div>
              <div className={classes.frame117}>
                <div className={classes.termAndConditions}>Term and Conditions</div>
                <div className={classes.privacyPolicy}>Privacy Policy</div>
                <div className={classes.shippingPolicy}>Shipping Policy</div>
                <div className={classes.sitemap}>Sitemap</div>
              </div>
            </div>
            <div className={classes.frame119}>
              <div className={classes.needHelp}>Need Help</div>
              <div className={classes.frame115}>
                <div className={classes.contactUs}>Contact Us</div>
                <div className={classes.trackOrder}>Track Order</div>
                <div className={classes.returnsRefunds}>Returns &amp; Refunds</div>
                <div className={classes.fAQS}>FAQ&#39;s</div>
                <div className={classes.career}>Career</div>
              </div>
            </div>
            <div className={classes.frame120}>
              <div className={classes.company}>Company</div>
              <div className={classes.frame116}>
                <div className={classes.aboutUs}>About Us</div>
              </div>
            </div>
            <div className={classes.downloadTheApp}>Download The App </div>
          </div>
          <div className={classes.popularCategories}>Popular Categories</div>
          <div className={classes.frame18}>
            <div className={classes.group10}>
              <Group10Icon className={classes.icon11} />
            </div>
            <div className={classes.group11}>
              <Group11Icon className={classes.icon12} />
            </div>
            <div className={classes.group12}>
              <Group12Icon className={classes.icon13} />
            </div>
            <div className={classes.group13}>
              <div className={classes.rectangle73}></div>
              <div className={classes.in}>in</div>
            </div>
          </div>
          <div className={classes.line5}></div>
          <div className={classes.line6}></div>
          <div className={classes.copyright2023KibandaCulturalCr}>
            Copyright © 2023 Kibanda Cultural Crafts Ltd. All rights reserved.
          </div>
        </div>
      </div>
      <div className={classes.categoriesForMen}>
        <div className={classes.frame149}>
          <div className={classes.gIFTS}>GIFTS</div>
          <div className={classes.rectangle21}></div>
        </div>
        <div className={classes.frame49}>
          <div className={classes.frame15}>
            <div className={classes.rectangle20}></div>
            <div className={classes.frame10}>
              <div className={classes.frame9}>
                <div className={classes.africanCarving}>African Carving</div>
                <div className={classes.exploreNow}>Explore Now!</div>
              </div>
              <div className={classes.arrow1}>
                <Arrow1Icon className={classes.icon14} />
              </div>
            </div>
          </div>
          <div className={classes.frame16}>
            <div className={classes.rectangle212}></div>
            <div className={classes.frame12}>
              <div className={classes.frame11}>
                <div className={classes.charmNecklace}>Charm Necklace</div>
                <div className={classes.exploreNow2}>Explore Now!</div>
              </div>
              <div className={classes.arrow2}>
                <Arrow2Icon className={classes.icon15} />
              </div>
            </div>
          </div>
          <div className={classes.frame17}>
            <div className={classes.rectangle22}></div>
            <div className={classes.frame14}>
              <div className={classes.frame13}>
                <div className={classes.giraffeCarving}>Giraffe Carving</div>
                <div className={classes.exploreNow3}>Explore Now!</div>
              </div>
              <div className={classes.arrow3}>
                <Arrow3Icon className={classes.icon16} />
              </div>
            </div>
          </div>
          <div className={classes.frame182}>
            <div className={classes.rectangle222}></div>
            <div className={classes.frame142}>
              <div className={classes.frame132}>
                <div className={classes.ubuntuStool}>Ubuntu Stool</div>
                <div className={classes.exploreNow4}>Explore Now!</div>
              </div>
              <div className={classes.arrow32}>
                <Arrow3Icon2 className={classes.icon17} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame150}></div>
      </div>
      <div className={classes.wEMADEYOUREVERYDAYFASHIONBETTE}>
        <div className={classes.rectangle13}>
          <Rectangle13Icon className={classes.icon18} />
        </div>
        <div className={classes.frame396}>
          <div className={classes.unsplashBBiuSdck8tU}>
            <UnsplashBbiusdck8tuIcon className={classes.icon19} />
          </div>
          <div className={classes.text}>
            <div className={classes.h1Headline}>
              <div className={classes.textBlock}>UNVEILING AFRICA&#39;S ESSENCE!</div>
              <div className={classes.textBlock2}>
                <p></p>
              </div>
            </div>
            <div className={classes.h4SubHeadline}>
              Embark on a cultural odyssey with Kibanda Cultural Crafts - Authentic treasures celebrating Africa&#39;s
              rich heritage &amp; craftsmanship.
            </div>
            <Button_ButtonTypePrimaryButton
              className={classes.button2}
              hide={{
                shoppingCart: true,
                arrowRight: true,
              }}
              text={{
                button: <div className={classes.button}>Shop Now</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.bigSavingZone}>
        <div className={classes.frame138}>
          <div className={classes.bigSavingZone2}>Big Saving Zone</div>
          <div className={classes.rectangle213}></div>
        </div>
        <div className={classes.frame395}>
          <div className={classes.hawaiianShirts}>
            <div className={classes.rectangle74}></div>
            <div className={classes.text2}>
              <div className={classes.customMadeComfyStool}>Custom Made Comfy stool</div>
            </div>
          </div>
          <div className={classes.printedTShirt}>
            <div className={classes.rectangle75}></div>
            <div className={classes.text3}>
              <Button_ButtonTypePrimaryButton
                className={classes.button4}
                hide={{
                  shoppingCart: true,
                  arrowRight: true,
                }}
                text={{
                  button: <div className={classes.button3}>Limited Stock</div>,
                }}
              />
            </div>
          </div>
          <div className={classes.cargoJoggers}>
            <div className={classes.rectangle76}></div>
          </div>
          <div className={classes.oversizedTShirts}>
            <div className={classes.rectangle78}></div>
          </div>
          <div className={classes.urbanShirts}>
            <div className={classes.rectangle77}></div>
          </div>
          <div className={classes.imageArt}>Image Art</div>
        </div>
      </div>
      <div className={classes.newArrival}>
        <div className={classes.frame1382}>
          <div className={classes.newArrival2}>New Arrival</div>
          <div className={classes.rectangle214}></div>
        </div>
        <div className={classes.frame139}>
          <div className={classes.group17404}>
            <div className={classes.wristbands}>Wristbands</div>
            <div className={classes.photographerWhiteBackground}></div>
            <div className={classes.photographerWhiteBackground2}></div>
          </div>
          <div className={classes.group17405}>
            <div className={classes.rhino}>Rhino</div>
            <div className={classes.rectangle28}></div>
          </div>
          <div className={classes.group17406}>
            <div className={classes.girraffe}>Girraffe</div>
            <div className={classes.rectangle282}></div>
          </div>
          <div className={classes.group17407}>
            <div className={classes.plates}>Plates</div>
            <div className={classes.rectangle283}></div>
          </div>
        </div>
        <div className={classes.arrow}>
          <ArrowIcon className={classes.icon20} />
        </div>
        <div className={classes.arrow4}>
          <ArrowIcon2 className={classes.icon21} />
        </div>
      </div>
      <div className={classes.bestSellers}>Best Sellers</div>
      <div className={classes.deals}>
        <div className={classes.unsplashQyc13QBGaM4}></div>
        <div className={classes.breezySummerStyle}>
          <div className={classes.unsplashQyc13QBGaM42}></div>
        </div>
      </div>
      <div className={classes.shopHero1ProductSlide1}>
        <ChevronLeft
          className={classes.chevronLeft}
          hide={{
            icon: true,
          }}
        />
      </div>
      <div className={classes.carouselIndicators}>
        <div className={classes.carouselCaptions}></div>
        <div className={classes.carouselCaptions2}></div>
      </div>
      <div className={classes.carouselControlNext}>
        <div className={classes.chevronRight}>
          <ChevronrightIcon className={classes.icon22} />
        </div>
      </div>
      <div className={classes.carouselControlPrev}>
        <div className={classes.chevronLeft2}>
          <ChevronleftIcon className={classes.icon23} />
        </div>
      </div>
      <div className={classes.bannerText}>
        <Button_ButtonTypePrimaryButton
          className={classes.button6}
          hide={{
            shoppingCart: true,
            arrowRight: true,
          }}
          text={{
            button: <div className={classes.button5}>Shop Now</div>,
          }}
        />
      </div>
      <div className={classes.h1Headline2}>
        <div className={classes.textBlock3}>Africa’s</div>
        <div className={classes.textBlock4}>Premier Souvenier Online store</div>
      </div>
      <div className={classes.taskBaar}>
        <div className={classes.frame510}></div>
        <div className={classes.frame389}>
          <Component1_ButtonTypePrimaryBu className={classes.component1} />
          <Component1_ButtonTypePrimaryBu
            className={classes.component2}
            swap={{
              heart: (
                <User
                  swap={{
                    icon: <UserIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
          <Component1_ButtonTypePrimaryBu
            className={classes.component3}
            swap={{
              heart: (
                <ShoppingCart
                  swap={{
                    icon: <ShoppingCartIcon className={classes.icon2} />,
                  }}
                />
              ),
            }}
          />
        </div>
        <Button_ButtonTypePrimaryButton2
          className={classes.button8}
          swap={{
            shoppingCart: (
              <Search
                swap={{
                  icon: <SearchIcon className={classes.icon3} />,
                }}
              />
            ),
          }}
          hide={{
            arrowRight: true,
          }}
          text={{
            button: <div className={classes.button7}>Search</div>,
          }}
        />
        <div className={classes.details}>
          <div className={classes.shop}>Shop</div>
          <div className={classes.gifts}>Gifts</div>
          <div className={classes.specials}>Specials</div>
          <div className={classes.carvings}>Carvings</div>
        </div>
        <div className={classes.rectangle14}></div>
        <div className={classes.euphoria}>Kibanda Cultural Crafts</div>
        <div className={classes.unveilingTheSoulOfAfricanArtis}>Unveiling the Soul of African Artistry</div>
      </div>
    </div>
  );
});
