import Quill from "quill";

const BlockEmbed = Quill.import("blots/block/embed");

class VideoBlot extends BlockEmbed {
  static create(url) {
    const node = super.create();
    node.setAttribute("controls", "");
    node.setAttribute("src", url);
    node.setAttribute("style", "max-width: 100%;");
    return node;
  }

  static value(node) {
    return node.getAttribute("src");
  }
}

VideoBlot.blotName = "video";
VideoBlot.tagName = "video";

Quill.register(VideoBlot);
