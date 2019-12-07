// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 700px;
  padding: 0 24px;

  .content-box {
    border-bottom: 1px solid #f1f1f1;
  }

  .gap {
    height: 86px;
  }

  .title {
    color: #8a9aa9;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 1.67rem 0 5px;
  }

  /* 输入评论 */
  .comment-form {
    margin: 16px 0;
    display: flex;
    position: relative;
    padding: 12px 16px;
    background-color: #fafbfc;
    border-radius: 3px;

    .avatar {
      flex: 0 0 auto;
      position: relative;
      margin: 0 12px 0 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-image: url(https://user-gold-cdn.xitu.io/2019/11/1/16e2501add74f2ad?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1);
      display: inline-block;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #eee;
    }

    .form-box {
      flex: 1 1 auto;
      position: relative;

      .input-comment {
        position: relative;
        width: 100%;
        padding: 7px 12px;
        line-height: 1.7;
        font-size: 13px;
        color: #17181a;
        min-height: 16px;
        background-color: #fff;
        outline: none;
        border: 1px solid #f1f1f1;
        border-radius: 3px;

        &.focused {
          border-color: #007fff;
        }
      }

      .action-box {
        display: flex;
        align-items: center;
        margin: 8px 0 0;
        .submit {
          flex: 0 0 auto;
          margin-left: auto;
          color: #c2c2c2;
          font-size: 13px;

          .submit-btn {
            flex: 0 0 auto;
            margin-left: 8px;
            /* margin-left: auto; */
            padding: 6px 16px;
            font-size: 15px;
            color: #fff;
            background-color: #027fff;
            border-radius: 2px;
            border: none;
            outline: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;

            :disabled {
              cursor: default;
              opacity: 0.4;
            }
          }
        }
      }
    }
  }

  /* 评论展示区域 */
  .comment-list {
    margin: 0 20px 0 58px;
    & > .item {
      margin-bottom: 1.333rem;
    }

    .item {
      :not(:last-child) {
        margin-bottom: 16px;

        .content-box {
          border-bottom: 1px solid #f1f1f1;
        }
      }

      /* 一级回复 */
      .first-comment {
        display: flex;

        .avatar-link {
          flex: 0 0 auto;
          .avatar {
            height: 32px;
            width: 32px;
            border-radius: 50%;
            display: inline-block;
            background-color: #eee;
            /* background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg); */
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
          }
        }

        .content-box {
          flex: 1 1 auto;
          margin-left: 10px;

          .username {
            font-size: 13px;
            font-weight: 400;
            color: #333;
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .content {
            margin-top: 7px;
            font-size: 13px;
            color: #505050;
            line-height: 22px;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-all;
          }

          .reply-stat {
            display: flex;
            margin: 12px 0;
            font-weight: 400;
            font-size: 13px;
            color: #8a9aa9;

            .time {
              cursor: default;
            }

            .delete {
              /* display:none; */
              ::before {
                content: '·';
                margin: 0 4px;
              }
            }

            .action-box {
              flex: 0 0 auto;
              display: flex;
              justify-content: space-between;
              margin-left: auto;
              /* min-width: 106px; */
              color: #8a93a0;
              /* 元素及其子元素的文本不可选中 */
              user-select: none;

              .action {
                display: flex;
                align-items: center;
                margin-left: 6px;
                cursor: pointer;

                .action-title {
                  margin-left: 6px;
                }
              }
            }
          }

          /* 回复一级评论 */
          .form-box {
            margin-top: 13px;
            padding: 12px;
            background-color: #fafbfc;
            border-radius: 3px;

            .input-comment {
              position: relative;
              width: 100%;
              padding: 7px 12px;
              line-height: 1.7;
              font-size: 13px;
              color: #17181a;
              min-height: 16px;
              background-color: #fff;
              outline: none;
              border: 1px solid #f1f1f1;
              border-radius: 3px;

              &.focused {
                border-color: #007fff;
              }
            }

            .action-box {
              display: flex;
              align-items: center;
              margin: 8px 0 0;
              .submit {
                flex: 0 0 auto;
                margin-left: auto;
                color: #c2c2c2;
                font-size: 13px;

                .submit-btn {
                  flex: 0 0 auto;
                  margin-left: 8px;
                  /* margin-left: auto; */
                  padding: 6px 16px;
                  font-size: 15px;
                  color: #fff;
                  background-color: #027fff;
                  border-radius: 2px;
                  border: none;
                  outline: none;
                  transition: background-color 0.3s, color 0.3s;
                  cursor: pointer;

                  :disabled {
                    cursor: default;
                    opacity: 0.4;
                  }
                }
              }
            }
          }

          /* 二级回复 */
          .sub-comment-list {
            /* margin: 12px 0; */
            padding-left: 12px;
            background-color: #fafbfc;
            border-radius: 3px;

            &:last-child {
              margin-bottom: 12px;
            }

            .item {
              padding-top: 12px;

              .sub-comment {
                display: flex;
                width: 100%;

                .content-box {
                  margin: 0 12px 0 10px;
                  border-bottom: 1px solid #f1f1f1;

                  .content {
                    margin-top: 6px;
                    font-size: 13px;
                    color: #17181a;

                    .username-replied {
                      font-weight: 400;
                      color: #406599;
                      text-decoration: none;
                      cursor: pointer;
                    }

                    .sub-content {
                      color: #505050;
                      line-height: 22px;
                      white-space: pre-wrap;
                    }
                  }

                  .reply-stat {
                    margin-top: 7px;
                  }

                  /* 回复二级评论 */
                  .form-box {
                    background-color: #fff;
                    border: 1px solid #f1f1f2;
                    margin-bottom: 12px;
                  }
                }
              }

              /* :last-child .content-box {
                border-bottom: none;
              } */
            }
          }
        }
      }
    }
  }

  /* 查看更多 */
  .more-comment {
    display: block;
    padding: 13px 0;
    font-size: 13px;
    text-align: center;
    color: #406599;
    cursor: pointer;
    user-select: none;

    :hover {
      opacity: 0.8;
    }
  }
`
