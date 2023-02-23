package com.preproject.server.answer.entity;

import com.preproject.server.baseEntity.BaseEntity;
import javax.persistence.*;

import com.preproject.server.member.entity.Member;
import com.preproject.server.comment.entity.Comment;
import com.preproject.server.question.entity.Question;
import com.preproject.server.vote.entity.Vote;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Answer extends BaseEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Answer_Id")
  private Long id;
  @Column(nullable = false)
  @Lob
  @Setter
  private String content;

  @Column(nullable = false)
  @Builder.Default
  private Long voteCount = 0L;

  //연관관계
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "Member_Id")
  @Setter
  private Member member;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "Question_Id")
  @Setter
  private Question question;

  @OneToMany(mappedBy = "answer")
  @Builder.Default
  private List<Comment> comments = new ArrayList<>();

  @OneToMany(mappedBy = "answer")
  @Builder.Default
  private List<Vote> votes = new ArrayList<>();
}
