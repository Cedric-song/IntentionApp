<template>
  <div class="major-list">
    <van-nav-bar title="专业大全" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col :span="8">
        <van-cell-group>
          <van-cell :title="item.name" v-for="item in firstData" :key="item.id" @click="handleClickFirstCell(item)" :class="{'first-cell-active': firstAcitve === item.id}" />
        </van-cell-group>
      </van-col>
      <van-col :span="16">
        <van-collapse v-model="secondActive" accordion>
          <van-collapse-item :title="item.name" :name="item.id" v-for="item in secondData" :key="item.id" :class="{ 'second-cell-active': secondActive === item.id}">
            <div slot="default">
              <van-cell-group class="second-cell">
                <van-cell v-for="it in item.children" :key="it.id" :title="it.name" :to="{name: 'MajorItem',params: {id: it.id },query: {name: it.name} }" />
              </van-cell-group>
            </div>
          </van-collapse-item>

        </van-collapse>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondActive: '',
      firstAcitve: '',
      firstData: [
        {
          id: '10',
          name: '计算机',
          children: [
            {
              name: '计算机系',
              id: '1000',
              children: [
                {
                  name: '计算机科学与技术',
                  id: '1001'
                },
                {
                  name: '计算机应用',
                  id: '1002'
                }
              ]
            },
            {
              name: '信息工程系',
              id: '1010',
              children: [
                {
                  name: '信息工程',
                  id: '1011'
                },
                {
                  name: '信息技术',
                  id: '1012'
                }
              ]
            }
          ]
        },
        {
          id: '20',
          name: '法律',
          children: [
            {
              name: '法律系',
              id: '2000',
              children: [
                {
                  name: '法律法规',
                  id: '2001'
                },
                {
                  name: '法律合规',
                  id: '2002'
                }
              ]
            },
            {
              name: '制度系',
              id: '2010',
              children: [
                {
                  name: '制度关系',
                  id: '2011'
                },
                {
                  name: '制度方式',
                  id: '2012'
                }
              ]
            }
          ]
        }
      ],
      secondData: [
        {
          name: '计算机系',
          id: '1000',
          children: [
            {
              name: '计算机科学与技术',
              id: '1001'
            },
            {
              name: '计算机应用',
              id: '1002'
            }
          ]
        },
        {
          name: '信息工程系',
          id: '1010',
          children: [
            {
              name: '信息工程',
              id: '1011'
            },
            {
              name: '信息技术',
              id: '1012'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClickFirstCell(item) {
      this.secondData = item.children
      this.firstAcitve = item.id
    },
    FetchData() {
      this.$api.GetMajorList(res => {
        if (res.data.code === 200) {
          this.firstData = res.data.data.list
          this.secondData = this.firstData[0].children
          this.firstAcitve = this.firstData[0].id
        } else {
          this.$dialog
            .alert({
              message: '获取数据失败，点击确定请稍后再试。'
            })
            .then(() => {
              this.FetchData()
            })
        }
      })
    }
  },
  created() {
    this.firstAcitve = this.firstData[0].id
    this.FetchData()
  }
}
</script>
<style lang="scss" >
.major-list {
  .van-collapse-item__content {
    padding: 0;
  }
  .first-cell-active {
    background-color: rgba(28, 212, 174, 0.3);
    border-left: 4px solid #1cd4ae;
    box-sizing: border-box;
  }

  .second-cell-active {
    .van-cell__value {
      color: #1cd4ae;
    }
    .van-cell__right-icon {
      color: #1cd4ae;
    }
  }
}
</style>



