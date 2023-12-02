import { Text, TextProps } from './Themed';
import * as React from 'react';
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
