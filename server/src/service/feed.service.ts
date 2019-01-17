import { getRepository } from 'typeorm';
import { Feed } from '../entity/Feed';

class FeedService {
  public async getFeeds({ userId, limit, offset }): Promise<Feed[]> {
    return await getRepository(Feed)
      .createQueryBuilder('feed')
      .leftJoinAndSelect('feed.marks', 'feed_mark', '"feed_mark"."userId" = :userId', { userId })
      .leftJoinAndSelect("feed.source", "feed_source")
      .orderBy('"feed"."createdAt"', 'DESC')
      .limit(limit)
      .offset(offset)
      .getMany();
  }


  public async getSourceFeeds({userId, sourceId, limit, offset}): Promise<Feed[]> {
    return await getRepository(Feed)
      .createQueryBuilder('feed')
      .leftJoinAndSelect('feed.marks', 'feed_mark', '"feed_mark"."userId" = :userId', { userId })
      .leftJoinAndSelect("feed.source", "feed_source")
      .where('feed_source.id = :sourceId', {sourceId})
      .orderBy('"feed"."createdAt"', 'DESC')
      .limit(limit)
      .offset(offset)
      .getMany();
  }


  public async saveFeed(feed: Feed): Promise<Feed> {
    const savedFeed: Feed = await getRepository(Feed).save(feed);
    return savedFeed;
  }

  public async findFeed(feedId: string): Promise<Feed> {
    return await getRepository(Feed).findOne({ id: feedId });
  }
}

export default new FeedService();
