package com.preproject.server.tag.service;

import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.tag.entity.Tag;
import com.preproject.server.tag.exception.TagExceptionCode;
import com.preproject.server.tag.repository.TagRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {

  private final TagRepository tagRepository;

  public Tag findTag(String name) {
    Optional<Tag> optionalTag = tagRepository.findTagByName(name);
    return optionalTag.orElseThrow(
        () -> new BusinessLogicException(TagExceptionCode.TAG_NOT_FOUND));
  }

  public Page<Tag> findTags(Pageable pageable) {
    return tagRepository.findAll(pageable);
  }
}