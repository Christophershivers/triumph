'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, Card } from '@mantine/core';
import classes from './css/TabStyle.module.css'


function MantinTab() {
  const [activeTab, setActiveTab] = useState('Posts');
  const [orientation, setOrientation] = useState('horizontal'); // Change to 'vertical' as needed
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const tabRefs = useRef({});
  const tabsListRef = useRef(null);

  useEffect(() => {
    const newTabElement = tabRefs.current[activeTab];
    if (newTabElement) {
      moveIndicator(null, newTabElement);
    }
  }, [activeTab, orientation]);

  const moveIndicator = (oldTab, newTab) => {
    if (!newTab || !tabsListRef.current) return;
    console.log('tab: ',newTab)
    const isHorizontal = orientation === 'horizontal';
    const newTabSize = isHorizontal
      ? newTab.offsetWidth
      : newTab.offsetHeight;
    const newTabOffset = isHorizontal
      ? newTab.offsetLeft
      : newTab.offsetTop;

    if (oldTab) {
      const oldTabOffset = isHorizontal
        ? oldTab.offsetLeft
        : oldTab.offsetTop;
      const oldTabSize = isHorizontal
        ? oldTab.offsetWidth
        : oldTab.offsetHeight;

      const initialPosition = Math.min(oldTabOffset, newTabOffset);
      const transitionSize =
        Math.abs(newTabOffset - oldTabOffset) +
        (newTabOffset > oldTabOffset ? newTabSize : oldTabSize);
      
      const initialStyles = {
        [isHorizontal ? 'left' : 'top']: `${initialPosition}px`,
        [isHorizontal ? 'width' : 'height']: `${transitionSize}px`,
        transition: 'none',
      };

      setIndicatorStyles(initialStyles);

      setTimeout(() => {
        const finalStyles = {
          [isHorizontal ? 'left' : 'top']: `${newTabOffset}px`,
          [isHorizontal ? 'width' : 'height']: `${newTabSize}px`,
          transition: 'left 200ms, top 200ms, width 200ms, height 200ms',
        };
        setIndicatorStyles(finalStyles);
      }, 0);
    } else {
      // Initial position
      const initialStyles = {
        [isHorizontal ? 'left' : 'top']: `${newTabOffset}px`,
        [isHorizontal ? 'width' : 'height']: `${newTabSize}px`,
        transition: 'left 200ms, top 200ms, width 200ms, height 200ms',
      };
      setIndicatorStyles(initialStyles);
    }
  };

  const handleTabChange = (newTab) => {
    const oldTab = tabRefs.current[activeTab];
    const newTabElement = tabRefs.current[newTab];
    moveIndicator(oldTab, newTabElement);
    setActiveTab(newTab);
  };

  const isHorizontal = orientation === 'horizontal';

  // Styles for the tab list
  const tablistStyles = {
    position: 'relative',
    display: 'flex',
    ...(isHorizontal ? { width: '' } : { height: 'fit-content' }),
    borderBottom: isHorizontal ? '1px solid hsl(0, 0%, 30%)' : 'none',
    flexDirection: isHorizontal ? 'row' : 'column',
  };

  return (
    <div className=' '>
      <Card className={`w-full tab-style ${classes.tabStyle} overflow-y-auto`} withBorder>
        <Tabs
          color="rgba(255, 255, 255, 0)"
          value={activeTab}
          onChange={handleTabChange}
          orientation={orientation}
          className="tabs-container custom-tab"
          styles={{tabControl:{minWidth:'1500px'}}}
          
        >
          <Tabs.List  ref={tabsListRef}  grow>
            <div
              className={`custom-indicator ${isHorizontal ? 'horizontal' : 'vertical'} `}
              style={indicatorStyles}
            />
            <Tabs.Tab
              value="Posts"
              ref={(el) => (tabRefs.current['Posts'] = el)}
            >
              Posts
            </Tabs.Tab>
            <Tabs.Tab
              value="Replies"
              ref={(el) => (tabRefs.current['Replies'] = el)}
            >
              Replies
            </Tabs.Tab>
            <Tabs.Tab
              value="Likes"
              ref={(el) => (tabRefs.current['Likes'] = el)}
            >
              Likes
            </Tabs.Tab>
            <Tabs.Tab
              value="Photos"
              ref={(el) => (tabRefs.current['Photos'] = el)}
            >
              Photos
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Posts">Posts tab content</Tabs.Panel>
          <Tabs.Panel value="Replies">Replies tab content</Tabs.Panel>
          <Tabs.Panel value="Likes">Likes tab content</Tabs.Panel>
          <Tabs.Panel value="Photos">Photos tab content</Tabs.Panel>
        </Tabs>

        <style jsx>{`
          .custom-indicator {
            z-index: 10;
            position: absolute;
            background: var(--mantine-color-blue-light-color);
          }

          .custom-indicator.horizontal {
            bottom: 0;
            height: 2px;
          }

          .custom-indicator.vertical {
            right: 0;
            width: 4px;
          }

          .custom-tab {
            min-width: 1000px;
            padding: 10px 20px;
          }

          .tab-style{
            padding: 0px !important;
          }
        `}</style>
      </Card>
    </div>
  );
}

export default MantinTab;
