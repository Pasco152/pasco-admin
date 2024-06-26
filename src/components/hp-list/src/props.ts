import { PropType } from 'vue';
import { ListType, ListTabsType } from './types';

export const listProps = {
  // 列表数据
  list: {
    type: Array as PropType<ListType[]>,
    default: () => [],
  },
  // 标签数据
  listTabs: {
    type: Array as PropType<ListTabsType[]>,
    default: () => [],
  },
  // 标签激活项
  activeName: {
    type: String as PropType<string>,
    default: '',
  },
  // 列表选中项id
  listActiveIdx: {
    type: Number as PropType<number>,
    default: 1,
  },
  // 页码
  page: {
    type: Number as PropType<number>,
    default: 1,
  },
  // 每页显示条目个数
  pageSize: {
    type: Number as PropType<number>,
    default: 10,
  },
  // 数据总数
  total: {
    type: Number as PropType<number>,
    default: 0,
  },
  // 底部按钮文字
  bomBtnTxt: {
    type: String as PropType<string>,
    default: '',
  },
  // 是否展示底部按钮
  isShowBomBtn: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  // 加载状态
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // 是否禁用
  isDisable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
