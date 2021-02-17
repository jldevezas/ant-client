<template>
  <div class="notice" v-show="!isHidden">
    <div class="title-container">
      <div class="title">Aviso de sunsetting:</div>
    </div>
    <div class="message">
      <small>Em consequência das medidas de privacidade implementadas a 16 de Fevereiro de 2021, que limitam a pesquisa de estudantes a pessoas validadas no SIGARRA, os índices do ANT não serão mais atualizados. A pesquisa atual é feita sobre um índice atualizado a 5 de Dezembro de 2020, para estudantes, e a 17 de Fevereiro de 2021, para as restantes entidades, representando apenas a informação pública nessas essas datas.</small>
    </div>
    <div class="close" @click="hide()">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'SunsetNotice',
  data () {
    let hideNotice = this.$cookies.get('hideNotice') === 'true'
    return {
      isHidden: hideNotice
    }
  },
  methods: {
    hide () {
      this.isHidden = true
      this.$cookies.set('hideNotice', this.isHidden)
    }
  }
}
</script>

<style lang="scss">
  .notice {
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    vertical-align: middle;
    background-color: #387ff5;
    padding: 0.5em 0.75em;
    color: white;

    .title-container {
      flex: 11em;
      margin-right: 1em;

      .title {
        min-height: 2.75em;
        line-height: calc(2.75em - 10px);
        padding: 5px 10px;
        border-radius: 10px;
        font-size: smaller;
        font-weight: bold;
        color: #387ff5;
        background-color: #EEE5E9;
      }
    }

    .message {
      flex: 100%;
      line-height: 1.2em;
      padding-right: 2em;
    }

    .close {
      display: inline;
      position: absolute;
      right: 0.75em;
      bottom: calc(50% - 25px / 2);
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-weight: bold;
      color: #EEE5E9;
      cursor: pointer;
      user-select: none;

      &:hover {
        border-radius: 50%;
        color: #387ff5;
        background-color: #EEE5E9;
      }
    }
  }
</style>