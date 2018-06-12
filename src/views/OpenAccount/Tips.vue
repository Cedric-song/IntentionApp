<template>
  <div class="dianxin">
    <van-nav-bar title="中国电信股份有限公司校园业务登记单" left-text="关闭" left-arrow @click-left="$emit('update:show', false)" />
    <van-row :gutter="20">
      <van-col span="24" class="subtitle strong" style="text-align:center;font-size:14px;">中国电信股份有限公司校园业务登记单</van-col>
      <van-col span="24" class="subtitle">办理号码：**</van-col>
      <van-col span="24" class="subtitle">客户名称：**</van-col>
      <van-col span="24" class="subtitle">证件类型：身份证</van-col>
      <van-col span="24" class="subtitle">通信地址：**</van-col>
      <van-col span="24" class="subtitle">电子邮箱：手机号@189.cn</van-col>
      <van-col span="24" class="subtitle">联系电话：**</van-col>
      <van-col span="24" class="subtitle">证件号码：**</van-col>
      <br>
      <van-col span="24" class="subtitle strong" style="text-align:center;font-size:14px;">中国电信股份有限公司校园业务服务协议</van-col>
      <van-col span="24" class="info">为维护双方利益，根据相关法律、法规的规定，双方在平等、自愿、公平、诚实信用的基础上，中国电信股份有限公司校园营销中心（以下简称“电信公司”）与客户就电信业务服务的相关事宜达成如下协议：
      </van-col>
      <van-col span="24" class="subtitle strong">第一条 服务范围</van-col>
      <van-col span="24" class="subtitle">1.1 电信公司以通信网络与设施向客户提供其所选择的服务，客户按照本协议约定的条件接受服务。
      </van-col>
      <van-col span="24" class="subtitle strong">第二条 业务登记</van-col>
      <van-col span="24" class="subtitle">2.1 客户进行业务登记时，应提交以下资料：
      </van-col>
      <van-col span="24" class="subtitle">2.1.1 个人客户：提供真实有效的本人身份证件原件。委托他人办理业务的，代办人应同时提供委托人、代办人的有效身份证件原件。
      </van-col>
      <van-col span="24" class="subtitle">2.1.2 单位客户：提供真实有效的本单位注册登记证照资料，并提供经办人有效身份证件原件。
      </van-col>
      <van-col span="24" class="subtitle">2.2 客户使用客户密码通过10000号、网上服务中心、自助服务终端等登记业务时，可以不提供2.1中的资料，另有约定除外。
      </van-col>
      <van-col span="24" class="subtitle strong">第三条 客户资料
      </van-col>
      <van-col span="24" class="subtitle">3.1 客户登记办理业务时，应向电信公司提供真实、有效的客户资料，本协议有效期内客户资料变更时应及时通知电信公司。
      </van-col>
      <van-col span="24" class="subtitle">3.2 电信公司对客户资料依法保密，但为建立与客户沟通渠道，改善服务工作，电信公司可以使用本协议涉及的客户资料。
      </van-col>
      <van-col span="24" class="subtitle">3.3 客户密码是客户的重要资料，客户应及时修改初始密码，并注意保密。客户密码遗失或被盗时，应及时进行修改或挂失。因客户原因造成的客户密码丢失或被他人获取造成的损失，电信公司不承担责任。
      </van-col>
      <van-col span="24" class="subtitle strong">第四条 业务使用
      </van-col>
      <van-col span="24" class="subtitle">4.1 客户有权自主选择使用电信公司提供的各类电信业务，有权自主选择取得入网许可的终端设备。
      </van-col>
      <van-col span="24" class="subtitle">4.2 客户使用电信业务时，应遵守国家法律、法规、规章等相关规定。
      </van-col>
      <van-col span="24" class="subtitle">4.3 未经电信公司同意并办理有关手续，客户将本协议的全部或部分转让给第三方的，对电信公司不发生法律效力。
      </van-col>
      <van-col span="24" class="subtitle">4.4 本协议终止后，电信公司有权收回客户原使用的业务号码，并在一定期限后分配给其他客户使用。 </van-col>
      <van-col span="24" class="subtitle strong">第五条 费用标准和费用交纳
      </van-col>
      <van-col span="24" class="subtitle">5.1 电信公司按照依法确定的资费标准向客户收取电信费用，客户应及时、足额支付各项费用。
      </van-col>
      <van-col span="24" class="subtitle">5.2 根据选择的电信业务种类，客户按预付费或后付费方式支付电信费用。除特殊约定外，后付费方式下客户按月支付费用，预付费方式下客户需预存金额，当帐户余额不足以支付客户拟使用的业务费用时，需及时充值。
      </van-col>
      <van-col span="24" class="subtitle">5.3 客户如选择或终止银行托收、银行代扣等方式支付电信费用时，需到银行等托收机构办理相应手续。
      </van-col>
      <van-col span="24" class="subtitle">5.4 客户逾期不交纳电信费用的，电信公司有权要求补交电信费用，并可以按照所欠费用每日加收3‰的违约金。
      </van-col>
      <van-col span="24" class="subtitle">5.5 客户在欠费情况下，应补交欠费和相应的违约金后才能办理其它业务。
      </van-col>
      <van-col span="24" class="subtitle">5.6 如遇国家调整电信费用标准的，自国家规定的调整时间起按新标准执行。如遇电信公司发布费用优惠方案的，自优惠方案规定的时间起按优惠标准执行。
      </van-col>
      <van-col span="24" class="subtitle strong">第六条 服务质量与客户服务
      </van-col>
      <van-col span="24" class="subtitle">6.1 电信公司在承诺的网络覆盖范围内，按照不低于《电信服务规范》的标准向客户提供服务。
      </van-col>
      <van-col span="24" class="subtitle">6.2 电信公司在营业场所公布电信业务的服务项目、服务时限、服务范围、资费标准、使用规则、交费规定等内容。
      </van-col>
      <van-col span="24" class="subtitle">6.3 电信公司通过10000号客户服务热线、营业厅等多种渠道提供业务受理、咨询、查询、障碍申告等服务。
      </van-col>
      <van-col span="24" class="subtitle">6.4 电信公司负责其提供的网络及设备的安装调测和维护，客户负责自带入网终端设备的安装、调测和维护。
      </van-col>
      <van-col span="24" class="subtitle">6.5 电信公司在本协议外以公告等形式公开做出的服务承诺，自动成为本协议的组成部份，但为客户设定义务或不合理地加重责任的除外。
      </van-col>
      <van-col span="24" class="subtitle strong">第七条 协议中止和解除
      </van-col>
      <van-col span="24" class="subtitle">7.1 除另有约定外，客户在交清电信费用后，可以暂停所使用的电信业务，但应办理有关手续和支付暂停期间的有关费用。
      </van-col>
      <van-col span="24" class="subtitle">7.2 客户有下列情形之一的，电信公司可以暂停向客户提供本协议约定的部分或全部服务，并收取暂停期间发生的费用：提供客户资料不真实或无效的；安装未取得入网许可，或可能影响网络安全或网络服务质量设备的；未办理相关手续，自行改变电信业务使用性质的；对于后付费业务，超过交费期限30日、经通知后仍未交费 的；对于预付费业务，帐户余额低于0元，或超过约定有效期的。
      </van-col>
      <van-col span="24" class="subtitle">7.3 除另有约定外，客户在交清相关电信费用及相应的违约金后，可办理业务注销或过户手续，本协议相应解除。
      </van-col>
      <van-col span="24" class="subtitle">7.4 客户有下列情形之一的，电信公司可以终止服务并终止本协议：擅自利用电信业务非法进行电信业务经营的；出现7.2所述情形，暂停服务超过60日的。
      </van-col>
      <van-col span="24" class="subtitle">7.5 客户在电信业务使用过程中如有违反相关法律、法规、规章规定的行为，电信公司可以暂停或终止提供电信服务。
      </van-col>
      <van-col span="24" class="subtitle">7.6预存款不可退。
      </van-col>
      <van-col span="24" class="subtitle strong">第八条 不可抗力
      </van-col>
      <van-col span="24" class="subtitle">8.1 由于不可抗力，如战争、自然灾害等，导致本协议不能履行的，双方均不需承担违约责任。
      </van-col>
      <van-col span="24" class="subtitle strong">第九条 争议解决
      </van-col>
      <van-col span="24" class="subtitle">9.1 所有因本协议引起的或与本协议有关的争议，本着互让互利的原则，通过协商解决。协商不成的，客户可向电信管理部门申诉或向消费者协会等有关部门投诉。 9.2按照9.1的约定，仍无法解决争议的，双方均可向北京仲裁委员会提起仲裁解决，仲裁裁决是终局的，对双方均有约束力。
      </van-col>
      <van-col span="24" class="subtitle strong">第十条 附则
      </van-col>
      <van-col span="24" class="subtitle">10.1客户登记单为本协议的组成部份，客户登记单内容与上述协议条款内容冲突时，以业务登记单为准。
      </van-col>
      <van-col span="24" class="subtitle">10.2 电信公司保留因技术进步或国家政策变动等原因对电信业务的服务功能、操作方法、业务号码等做出调整的权利，但调整时应提前告知客户并提供相应解决方案。
      </van-col>
      <van-col span="24" class="subtitle">10.3 电信公司可以采用电话、广播、短信、电视、公开张贴、信函、报纸或互联网等方式进行业务公告及业务通知。
      </van-col>
      <van-col span="24" class="subtitle">10.4 本协议自电信公司与客户或经办人在客户登记单上签字或盖章之日起生效。
      </van-col>
      <van-col span="24" class="subtitle">（以上资料属实，己阅读并同意本登记单内容及以上协议书内容条款及附加协议）
      </van-col>
      <van-col span="24" class="subtitle strong">客户确认：
        <span style="color: red;">（机主本人）
        </span>
      </van-col>
      <van-col span="24" class="subtitle strong">申请人经办人：
        <span style="color: red;">（机主本人）
        </span>
      </van-col>
      <van-col span="24" class="subtitle">业务受理单位：中国电信股分有限公司吉林分公司
      </van-col>
    </van-row>
  </div>
</template>


<style lang="scss" scoped>
.dianxin {
  font-size: 12px;
  color: #444444;
  overflow: scroll;
  .subtitle {
    margin-top: 5px;
    &.strong {
      font-weight: bold;
    }

    &.sign {
      margin-top: 20px;
    }
  }

  .info {
    margin-top: 10px;
    font-weight: bold;
  }
}
</style>


<script>
export default {
  props: {
    show: {}
  }
}
</script>
