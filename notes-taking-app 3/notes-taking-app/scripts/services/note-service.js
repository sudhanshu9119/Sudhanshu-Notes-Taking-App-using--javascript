// CRUD
import Note from '../models/note.js';
export const noteOperations ={
    notes:[],
 add(noteObject){
    const note = new Note(noteObject);
    this.notes.push(note);
 },
 searchById(id){
   return this.notes.find(note=>note.id==id);
 },
 toggleMark(id){
   this.searchById(id).toggleMark();
   //const noteObject = this.searchById(id);
   //noteObject.isMarked = !noteObject.isMarked;
 },


 total(){
    return this.notes.length;
 },
 markTotal(){
    return this.notes.
    filter(note=>note.isMarked).length;
 },
 unMarkTotal(){
    return this.total() - this.markTotal();
 },
 getNotes(){
   return this.notes;
 },
 remove(){
   this.notes = this.notes
   .filter(note=>!note.isMarked)
 },
 update(id){
   let notes = this.searchById(id);
   const title = document.getElementById('title');
   const desc = document.getElementById('desc');
   const cDate = document.getElementById('cdate');
   const importance = document.getElementById('importance');
   if (title.value !=''){
      notes.title = title.value;
   }
   if (desc.value !=''){
      notes.desc = desc.value;
   }
   if (cDate.value !=''){
      notes.cdate = cDate.value;
   }
   if (importance.value !='#000000'){
      importance.title = importance.value;
   }
 }

}