import React from 'react';
import { ApiCallFragment } from 'app/modules/documentation-module/common/DocDetail/common/ApiCallFragment';

export const CallFragment = ({ item }) => (
  <>
    {item.request && <ApiCallFragment data={item} key={item._postman_id} />}

    {item.item &&
      item.item.map((item) => (
        <React.Fragment key={item._postman_id}>
          <ApiCallFragment data={item} />

          {item.item &&
            item.item.map((subItem) => (
              <ApiCallFragment data={subItem} key={subItem.name} />
            ))}
        </React.Fragment>
      ))}
  </>
);
