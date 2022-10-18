import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${baseTheme.padding.settingsWrapper};
  justify-content: center;
`;

export const Name = styled.div`
  padding: ${baseTheme.padding.settingsName};
  font-size: ${baseTheme.fontSize.settingsName};
  font: ${baseTheme.font};
  user-select: none;

  @media (min-width: ${baseTheme.size.tablet}) {
    font-size: calc(
      24px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280)
    );
  }
`;

export const SwitchName = styled.div`
  padding: ${baseTheme.padding.switchName};
  font-size: ${baseTheme.fontSize.switchName};
  font: ${baseTheme.font};
  user-select: none;

  @media (min-width: ${baseTheme.size.tablet}) {
    font-size: calc(
      12px + (8 + 8 * 0.7) * ((100vw - 320px) / 1280)
    );
  }
`;

export const SelectionMenu = styled.select`
  width: ${baseTheme.width.mobileSettingsButton};
  height: ${baseTheme.height.mobileSettingsButton};
  user-select: none;
  white-space: nowrap;
  border: ${baseTheme.border.width.large} solid unset;
  border-radius: ${baseTheme.border.radius.settingsButton};
  text-align: left;
  padding: ${baseTheme.padding.settingsButton};
  font-size: ${baseTheme.fontSize.settingsButton};
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.selectText};
  font: ${baseTheme.font};
  cursor: pointer;

  @media (min-width: ${baseTheme.size.tablet}) {
    width: ${baseTheme.width.settingsButton};
    height: calc(
      60px + (22 + 22 * 0.7) * ((100vw - 320px) / 1280)
    );
    font-size: calc(
      18px + (12 + 12 * 0.7) * ((100vw - 320px) / 1280)
    );
  }
`;

export const Option = styled.option`
  color: unset;
`;

export const ClearAllButton = styled.button`
  width: ${baseTheme.width.mobileSettingsButton};
  height: ${baseTheme.height.mobileSettingsButton};
  margin: ${baseTheme.margin.clearHistoryButton};
  padding: ${baseTheme.padding.settingsButton};
  white-space: nowrap;
  user-select: none;
  text-align: left;
  cursor: pointer;
  border: ${baseTheme.border.width.large} solid unset;
  border-radius: ${baseTheme.border.radius.settingsButton};
  font-size: ${baseTheme.fontSize.settingsButton};
  font: ${baseTheme.font};

  @media (min-width: ${baseTheme.size.tablet}) {
    width: ${baseTheme.width.settingsButton};
    height: calc(
      60px + (22 + 22 * 0.7) * ((100vw - 320px) / 1280)
    );
    font-size: calc(
      18px + (12 + 12 * 0.7) * ((100vw - 320px) / 1280)
    );
  }
`;

export const SettingsContainer = styled.div`
  width: ${baseTheme.width.settings};
  height: ${baseTheme.height.settings};
`;
