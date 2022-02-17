let mode = Number(prompt('Enter identificator access 0-7'));

if (isNaN(mode) || mode >7 || mode < 0 ) {
  console.log('Incorrect data entered, please re-enter. Only digits from 0 to 7 are expected');
} else {
  switch (mode) {
  case 0: {
    console.log('No permissions at all (никаких прав) (---)');
    break;
  }
  case 1:{
    console.log('Only execute (только выполнение) (--x)');
    break;
  }
  case 2: {
    console.log('Only write (только запись) (-w-)');
    break;
  }
  case 3: {
    console.log('Write and execute (выполнение и запись) (-wx)');
    break;
  }
  case 4: {
    console.log('Only read (только чтение) (r--)');
    break;
  }
  case 5: {
    console.log('Read and execute (чтение и выполнение) (r-x)');
    break;
  }
  case 6: {
    console.log('Read and write (чтение и запись) (rw-)');
    break;
  }
  case 7: {
    console.log('Read, write, and execute (чтение запись и выполнение) (rwx)');   
    break;
  }
  default:
    break;
}
}