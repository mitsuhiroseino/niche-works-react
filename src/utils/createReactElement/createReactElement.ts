import type { ElementType, Key } from 'react';
import { createElement } from 'react';

/**
 * jsxまたはjsxsでReactElementのインスタンスを作成する
 * @param type コンポーネント
 * @param props プロパティ
 * @param key キー
 * @returns エレメント
 */
export default function createReactElement(
  type: ElementType,
  props: any,
  _key?: Key,
) {
  return createElement(type, props);
}
