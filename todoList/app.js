(function () {

  let Btn = document.querySelector("#liveToastBtn")
  let Form = document.querySelector("#listForm")
  let input = document.querySelector("#task")
  let list = document.querySelector("#list")
  const toastDOM = document.querySelector("#toaster")
  const toastDOM2 = document.querySelector("#toaster2")


  const TOAST = `<div style="position: absolute; top: 0; right: 0">
<div id="liveToast" class="toast error hide bg-danger" role="alert" aria-live="assertive" aria-atomic="true"
  data-delay="4000">
  <div>
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">INVALID INPUT!</div>
</div>
</div>`


  const TOAST2 = `<div style="position: absolute; top: 0; right: 0">
<div id="liveToast" class="toast success hide bg-warning" role="alert" aria-live="assertive" aria-atomic="true"
  data-delay="4000">
  <div>
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">ADDED TO THE LIST!</div>
</div>
</div>`




  Form.addEventListener("submit", formHandler)

  Btn.addEventListener("click", formHandler)
  function formHandler(e) {
    e.preventDefault()

    if (input.value) {
      addItem(input.value)
      input.value = ""
      toastDOM2.innerHTML = TOAST2
      $('.toast').toast('show');
      toastDOM.innerHTML = TOAST
      $('.toast').toast('hide');
    } else {
      toastDOM.innerHTML = TOAST
      $('.toast').toast('show');
      toastDOM2.innerHTML = TOAST2
      $('.toast').toast('hide');
    }
    store();

  }


  function addItem(task) {

    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${task} `
    list.append(liDOM)

  }


  list.addEventListener('click', function (e) {
    var t = e.target;
    if (t.classList.contains('checked')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked', "bg-dark");
    }
    store();
  }, false)



  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    let storedValues = window.localStorage.myitems;
    if (!storedValues) {
      list.innerHTML = ""
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();



