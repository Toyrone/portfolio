<template>
  <div class="noteListItem">
    <a>
      <i class="el-icon-arrow-right"></i>
      <p class="note-title">{{ note.text }}</p>
      <p class="small">{{ note.meta }}</p>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['note'],
  };
</script>

<style>
  .noteListItem a {
    position: relative;
    display: block;
    padding: 12px 25px;
    cursor: pointer;
    text-decoration: none;
    color: #2c3e50;
  }
  .noteListItem a:hover {
    color: #006699;
  }
  .noteListItem a i {
    position: absolute;
    top: 22px;
    right: 25px;
    margin: 0;
  }
  .noteListItem a .note-title {
    width: 90%;
    margin: 0;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .noteListItem a .small {
    margin: 0;
    margin-top: 3px;
    font-size: 11px;
  }

</style>
