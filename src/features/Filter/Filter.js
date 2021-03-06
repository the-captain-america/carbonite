import React, { useEffect, useState, useRef } from 'react';
import Icon from '../../common/Icon';
import ClickOutside from '../../hooks/clickOutside';
import {
  Container,
  Header,
  CollectionContainer,
  Content,
  Flex,
  Footer,
  List,
  Item,
  Panel
} from './styledComponents';
import { Button } from '../../common/Components';
import {
  length,
  pipe,
  compose,
  toPairs,
  map,
  reject,
  append,
  pluck,
  prop,
  flatten,
  values,
  propOr,
  find,
  propEq,
  chain,
  head,
  ifElse
} from 'ramda';

import Components from './components.js';

/**
 * Rough outline of behaviour requirements
 *
 * First column, "Filters", has a list of seectable items.  The component only shows one column until a selection is made.
 * Selecting an item under the first column triggers display of a related second column with selectable items
 * Selecting an item under the second column may or may not trigger display of a 3rd detatched column, which may contain
 * items selectable as checkboxes, or other.
 */

const Actions = ({ actions = [], onPress = () => {} }) => {
  const lookupIcon = {
    clear: '_FILTERS_CLEAR',
    clearall: '_FILTERS_CLEAR',
    apply: '_UPDATE'
  };
  return (
    <Footer>
      {length(actions) > 0 &&
        actions.map((action, index) => (
          <Button key={index} onClick={onPress}>
            <Icon name={lookupIcon[action?.action]} size={20} />
            <span className="text">{action?.name}</span>
          </Button>
        ))}
    </Footer>
  );
};

const Collection = ({
  data = {},
  isFirst = false,
  elRef,
  callback = () => {}
}) => {
  const [selected, setSelected] = useState(null);
  const [parentId, setParentId] = useState(null);

  const onSelect = item => {
    setSelected(item._uid);
    callback({ parentId, selectedItem: item });
  };

  useEffect(() => {
    setParentId(data?._uid);
    console.log('parent ID:::', data?._uid);
  }, [data]);

  if (!length(data?.items)) return <></>;

  return (
    <div ref={elRef}>
      <CollectionContainer isFirst={isFirst}>
        <Header>
          <h2>{data?.name || 'Panel Heading'}</h2>
        </Header>
        <Content>
          {data?.items.map((collection, index) => {
            console.log('collection >>', collection._uid);
            return (
              <Item
                key={index}
                isActive={collection._uid === selected}
                onClick={() => onSelect(collection)}
              >
                <span className="text"> {collection.name}</span>
              </Item>
            );
          })}
        </Content>
        {data?.actions && <Actions actions={data?.actions} />}
      </CollectionContainer>
    </div>
  );
};

const Filter = ({ config = {}, onClose = () => {} }) => {
  const [selected, setSelected] = useState(null);
  const [collections, setCollections] = useState([]);
  const [state, setState] = useState({});
  const [elheight, setElHeight] = useState(0);
  const el = useRef();

  const findById = id => pipe(values, find(propEq({ id })));

  const onSelectChild = ({ parentId, id }) => {
    setState(state => ({ ...state, [parentId]: id }));
  };

  console.log('STATE >>>>>>', state);

  const onSelect = ({ parentId, selectedItem }) => {
    const id = selectedItem?._uid;
    setSelected(id);
    onSelectChild({ parentId, id });

    if (id === selected) {
      console.log('it is the same...');
      setCollections(reject(item => item._uid === parentId, collections));
      return;
    }
    console.log('Not the same >>', selectedItem);

    fetchResults();
  };

  useEffect(() => {
    console.log(el);
    setElHeight(el.current.clientHeight);
  }, [elheight]);

  useEffect(() => {
    setCollections(config?.collections);
  }, [config]);

  // Make redux action creator call
  const fetchResults = async () => {
    const response = await (() => {
      return {
        _uid: 'categoryfields',
        name: 'Category Fields',
        items: [
          {
            name: 'Brand',
            type: 'selectable'
          },
          {
            name: 'Colour',
            type: 'selectable'
          },
          {
            name: 'Department',
            type: 'selectable'
          }
        ],
        actions: [
          {
            type: 'action',
            action: 'clear',
            name: 'Clear'
          }
        ]
      };
    })();

    console.log('append >>>', append(collections, response));
    setCollections(append(response, collections));
    // setResults();
  };

  console.log('selected item >>>>', selected);

  if (!length(config.collections)) return <></>;

  console.log('length(items) >>>', length(collections) * 240);
  return (
    <Container>
      <ClickOutside callback={onClose}>
        <Panel width={length(collections) * 240}>
          {collections?.map((collection, index) => (
            <Collection
              key={collection?._uid}
              callback={onSelect}
              data={collection}
              isFirst={index === 0}
              elRef={el}
            />
          ))}
        </Panel>
      </ClickOutside>
    </Container>
  );
};

export default Filter;
