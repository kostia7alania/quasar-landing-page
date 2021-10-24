export interface IScroll {
  delta: number;
  direction: 'up' | 'down';
  directionChanged: boolean;
  inflectionPoint: number;
  position: number;
}
