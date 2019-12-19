<template>
  <div id="info_table">
    <el-table
      :data="tableData"
      :height="height"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        v-for="item in tableHead"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :sortable="item.sortable"
        :show-overflow-tooltip="true"
        :align="item.align"
      >
        <template slot-scope="scope">
          <div class="table-cell">
            {{ scope.row[item.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        // filters: {
        //     defaultVal(value) {
        //         if(!value) return '-'
        //         value = value.toString()
        //         return value
        //     }
        // },
        props: {
            tableData: {
                type: Array,
                default: () => []
            },
            tableHead: {
                type: Array,
                default: () => []
            },
            height: {
                type: [String,Number],
                default: () => ""
            }
        },
        data() {
            return {

            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                row
                if (rowIndex % 2 == 1) {
                return 'warning-row';
                } else if (rowIndex % 2 == 0) {
                return 'success-row';
                }
                return 'warning-row';
            }
        }
    }
</script>

<style lang="scss">
    #info_table {
        .el-table {
            background: transparent;
        }
        .el-table th,.el-table tr {
            background: transparent;
        }
        .el-table--medium th, .el-table--medium td {
            padding: 5px 0;
        }
        .el-table--enable-row-hover .el-table__body tr:hover>td{
            background-color: #212e3e;
        }
        .el-table th.is-leaf, .el-table td {
            border: none
        }
        .el-table--group::after, .el-table--border::after, .el-table::before {
            background: transparent;
        }
        .el-table .warning-row {
            background: transparent;
        }

        .el-table .success-row {
            background: rgba($color: #0e046e, $alpha: 0.4);
        }
    }
</style>