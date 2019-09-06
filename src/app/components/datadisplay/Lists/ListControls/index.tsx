import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Palette } from 'app/theme';
import Typography from '@material-ui/core/Typography';
import Checkbox from 'app/components/inputs/checkboxes/Checkbox';
import { Tooltip } from '@material-ui/core';

type Props = {
  data: any;
  onCheckChange?: Function;
  addedFilterOptions?: string[];
};

const BaseComponent = styled(props => <List {...props} />)`
  padding: 0;

  & [class*='MuiTypography-body2'] {
    color: black;
  }

  & [class*='MuiListItem-button'] {
    padding-top: 3px;
    padding-bottom: 3px;
  }

  & [class*='Mui-checked'] > [class*='MuiSvgIcon-root'] {
    fill: ${Palette.primary.main};
  }
`;

const ListCategory = styled(props => <Typography {...props} />)`
  color: black;
  padding: 16px 0 8px 30px;
  background: ${Palette.grey[40]};
  border-top: 1px solid ${Palette.action.disabledBackground};
  border-bottom: 1px solid ${Palette.action.disabledBackground};
`;

//todo: look into virtualized lists https://material-ui.com/components/lists/
const ListControls = (props: Props) => {
  const [checked, setChecked] = React.useState(props.addedFilterOptions || []);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value as never);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value as never);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    if (props.onCheckChange) {
      props.onCheckChange(newChecked);
    }
    setChecked(newChecked);
  };

  return (
    <BaseComponent>
      {props.data.map(category => {
        return (
          <React.Fragment key={category}>
            <ListCategory variant="h6">{category[0]}</ListCategory>
            {category[1].map(item => {
              return (
                <React.Fragment key={item.label}>
                  {item.disabled ? (
                    <Tooltip title="Filter not available yet">
                      <ListItem
                        dense
                        button
                        style={{ opacity: item.disabled ? 0.4 : 1 }}
                        onClick={() =>
                          !item.disabled && handleToggle(item.label)
                        }
                      >
                        <ListItemIcon>
                          <Checkbox
                            checked={
                              checked.indexOf(item.label as never) !== -1
                            }
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    </Tooltip>
                  ) : (
                    <ListItem dense button onClick={handleToggle(item.label)}>
                      <ListItemIcon>
                        <Checkbox
                          checked={checked.indexOf(item.label as never) !== -1}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  )}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </BaseComponent>
  );
};

export default ListControls;
