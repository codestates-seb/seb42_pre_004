package com.preproject.server.vote.repository;

import com.preproject.server.answer.entity.Answer;
import com.preproject.server.question.entity.Question;
import com.preproject.server.vote.entity.Vote;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    @Query("select q from Vote v join Question q on q.id = :id")
    public Page<Question> findSimpleQuestion(Pageable pageable, @Param("id")Long id);

    @Query("select a from Vote v join Answer a on a.id = :id")
    public Page<Answer> findSimpleAnswer(Pageable pageable, @Param("id")Long id);

}
