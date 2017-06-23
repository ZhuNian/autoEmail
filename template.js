module.exports = props => {
  return `<div style="">
  <div>
    Dear all:
  </div>

  <div style="margin-bottom:20px">
    如下是今日工作项:
  </div>

  <div class="table" style="border:1px solid black;border-right:none;border-bottom:none;width:700px">
    <div class="header" style="background-color:#8DB4E2">
      <div style="display:inline-block;width:10%;height:25px;border-right:1px solid black;border-bottom:1px solid black;text-align:center">
        任务编号
      </div>
      
      <div style="display:inline-block;width:45%;height:25px;border-right:1px solid black;border-bottom:1px solid black;text-align:center">
        任务描述
      </div>

      <div style="display:inline-block;width:15%;height:25px;border-right:1px solid black;border-bottom:1px solid black;text-align:center">
        完成进度
      </div>


      <div style="display:inline-block;width:27%;height:25px;border-right:1px solid black;border-bottom:1px solid black;text-align:center">
        说明或困难
      </div>
    </div>

    <div>
      ${props.map((p, index) => {
        return _getTable(p, index);
      })}
    </div>
  </div>
</div>`;
};

function _getTable(commit, index) {
  let arr = commit.split(',');
  console.log(arr);

  let html =
    `<div>
        <div style="width:10%;height:25px;display:inline-block;border-right:1px solid black;border-bottom:1px solid black">
        ${index}
        </div>

        <div style="display:inline-block;width:45%;height:25px;border-right:1px solid black;border-bottom:1px solid black">
        ${arr[0]}
        </div>

        <div style="display:inline-block;width:15%;height:25px;border-right:1px solid black;border-bottom:1px solid black">
        ${arr[1] || ''}
        </div>

        <div style="display:inline-block;height:25px;width:27%;border-right:1px solid black;border-bottom:1px solid black">
        ${arr[2] || ''}
        </div>

       </div>`;

  return html;
}
