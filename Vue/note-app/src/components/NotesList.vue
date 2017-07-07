<template>
  <div class="noteList u-absolute-flex-column">
    <header class="app-header">All Notes ({{ notesCount }})</header>
    <ul class="u-scroller">
      <li v-for="note in notes">
          <NoteListItem v-bind:note = "note" />
      </li>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" name="button">Add Note</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import NoteListItem from '@/components/NoteListItem';

export default {
  name: 'NoteList',
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    loadNotes() {
      this.notes = [
        { title: 'A new note', meta: 'Added 2 days ago' },
        { title: 'Another new note', meta: 'Added 2 days ago'},
        { title: 'And yet another one', meta: 'Added 2 days ago'},
      ];
    },
  },
  mounted() {
    this.loadNotes();
  },
  computed: {
    notesCount() {
      return this.notes.length;
    },
  },
  components: { NoteListItem },
}
</script>

<style scoped>
.noteList ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.noteList ul li {
  border-bottom: 1px solid #EFEFEF;
}
.noteList ul li a {
  position: relative;
  display: block;
  padding: 12px 25px;
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}
.noteList ul li a:hover {
  color: #006699;

}
.noteList ul li a i {
  position: absolute;
  top: 22px;
  right: 25px;
  margin: auto 0;
}
.noteList ul li a .note-title {
  width: 90%;
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.noteList ul li .small {
  margin: 0;
  margin-top: 3px;
  font-size: 11px;
}
</style>
