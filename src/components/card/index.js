import { Button, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import Text from "../text";
import CostComponent from "../cost";
import { IsekaiPointsMatcher } from "../../matchers/IsekaiPoints";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../redux/selectors";
import { updateSinglePerk } from "../../redux/slice";
import MultiPurchaseComponent from "../multi-purchase";

const SingleCardComponent = ({ choice }) => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const locationBasedFuntions = {
    perks: updateSinglePerk,
  };
  const upgrades = choice?.upgrades || [];
  const onClick = () => dispatch(locationBasedFuntions[location](choice));
  return (
    <Grid container>
      <Button onClick={onClick} fullWidth>
        <Grid container>
          <Grid item xs={12}>
            <Text text={choice.title} />
          </Grid>
          <Grid item xs={12}>
            <CostComponent cost={choice.cost} />
          </Grid>
          <Grid item xs={12}>
            {/* Maybe Make Description Component */}
            {choice.description.map((descriptionText, ind) => {
              return (
                <Fragment key={`opener-description-${ind}`}>
                  <Text
                    text={descriptionText}
                    matchers={[new IsekaiPointsMatcher("IP")]}
                  />
                  <br />
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Button>
      <Grid item xs={12}>
        <Grid container>
          {upgrades.map((upgrade, index) => {
            return (
              <Grid key={`choice-card-upgrade-${index}`} item xs={12}>
                <Button fullWidth>
                  <Grid container>
                    <Grid item xs={12}>
                      <Text text={upgrade.title} />
                    </Grid>
                    <Grid item xs={12}>
                      <CostComponent cost={upgrade.cost} />
                    </Grid>
                    <Grid item xs={12}>
                      {upgrade.description.map((descriptionText, ind) => {
                        return (
                          <Fragment key={`opener-description-${ind}`}>
                            <Text
                              text={descriptionText}
                              matchers={[new IsekaiPointsMatcher("IP")]}
                            />
                            <br />
                          </Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const MultiCardComponent = ({ choice }) => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const locationBasedFuntions = {
    perks: updateSinglePerk,
  };
  const upgrades = choice?.upgrades || [];
  const onClick = () => dispatch(locationBasedFuntions[location](choice));
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Text text={choice.title} />
          </Grid>
          <Grid item xs={12}>
            <CostComponent cost={choice.cost} />
          </Grid>
          <Grid item xs={12}>
            <MultiPurchaseComponent choice={choice} />
          </Grid>
          <Grid item xs={12}>
            {/* Maybe Make Description Component */}
            {choice.description.map((descriptionText, ind) => {
              return (
                <Fragment key={`opener-description-${ind}`}>
                  <Text
                    text={descriptionText}
                    matchers={[new IsekaiPointsMatcher("IP")]}
                  />
                  <br />
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {upgrades.map((upgrade, index) => {
            return (
              <Grid key={`choice-card-upgrade-${index}`} item xs={12}>
                <Button fullWidth>
                  <Grid container>
                    <Grid item xs={12}>
                      <Text text={upgrade.title} />
                    </Grid>
                    <Grid item xs={12}>
                      <CostComponent cost={upgrade.cost} />
                    </Grid>
                    <Grid item xs={12}>
                      {upgrade.description.map((descriptionText, ind) => {
                        return (
                          <Fragment key={`opener-description-${ind}`}>
                            <Text
                              text={descriptionText}
                              matchers={[new IsekaiPointsMatcher("IP")]}
                            />
                            <br />
                          </Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const CardComponent = ({ choice }) => {
  return choice.multi ? (
    <MultiCardComponent choice={choice} />
  ) : (
    <SingleCardComponent choice={choice} />
  );
};

export default CardComponent;
