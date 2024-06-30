export default function tagline() {
  const closeTaglineButton = document.querySelector('.tagline .tagline__close');
  const tagline = document.querySelector('.tagline');

  closeTaglineButton.onclick = () => {
    tagline.remove();
  };
}
