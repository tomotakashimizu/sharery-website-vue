<template>
  <div>
    <br /><br />
    <b-container fluid="md">
      <div class="text-section round-shadow">
        <h1 class="title">Concept</h1>
        <div class="text">
          Shareryは<span>「適度な距離の人間関係」を目指した日記共有SNS</span>です。
          <br /><br />
          現在SNSの普及により、近くにいなくても多くの人と簡単に繋がることが可能になっています。
          <br />
          物理的な距離があり気軽には会えない家族や友人、恋人などといつでも連絡が取れることは、とても素晴らしいことだと思います。
          <br /><br />
          しかし、SNSのメリットであるいつでも連絡ができる距離感が、人の距離を近づけ過ぎてしまっていると感じています。
          SNSの通知がなるたびに誰かの投稿やメッセージに反応し、いいねや返信することが当たり前のようになっている人は、まさに距離が近くなり過ぎている例の1つではないでしょうか。
          <br /><br />
          距離感が近くなることにより、楽しみや思い出、悩みを共有することにとどまらず、承認欲求を満たすためのツールとして使ったり、意図せず時間を溶かしてしまうことは、多くの人が抱えている課題だと考えています。
          <br /><br />
          以上の背景を踏まえて、Shareryは、大切な人との繋がりを大事にしつつも、人との距離を適度に保てるように開発されました。
          <br />
          Shareryには、<span
            >通知機能がなく、お互いの時間に介入させません。</span
          >
          また、<span>いいね数は相手にも自分にも表示されないため、承認欲求に左右されず本当に自分の投稿したい日記</span>を書くことができます。
          <br /><br />
          Shareryでは本当の意味で、<span>大切な思い出を大切な人と適度な距離で共有する</span>ことが可能になるでしょう。
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.text-section {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  background-color: #fff;
}
.round-shadow {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3); /* 影指定 */
  border-radius: 7px; /* 角丸指定 */
}
.title {
  font-weight: bold;
  font-style: italic;
  text-align: left;
}
.text {
  text-align: left;
  line-height: 35px;
  margin-top: 30px;
  margin-bottom: 20px;
}
span {
  font-weight: bold;
}
</style>
