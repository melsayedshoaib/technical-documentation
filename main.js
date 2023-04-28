let codes = document.querySelectorAll("code");
for (let i = 0; i < codes.length; i++) {
  let copyCTA = document.createElement("span");
  copyCTA.style.position = "absolute";
  copyCTA.style.top = "0.2rem";
  copyCTA.style.right = "0.5rem";
  copyCTA.style.cursor = "pointer";
  copyCTA.title = "Copy to clipboard";
  copyCTA.innerHTML = `<i class="fa-solid fa-clipboard"></i>`;
  codes[i].append(copyCTA);
  copyCTA.addEventListener("click", (e) => {
    let copyText = e.target.parentElement.parentElement.innerText;
    navigator.clipboard.writeText(copyText);
    Swal.fire({
      icon: "success",
      title: "Code copied to clipboard",
      showConfirmButton: false,
      timer: 2000,
    });
  });
}
